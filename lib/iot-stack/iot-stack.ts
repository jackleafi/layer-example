import { Construct } from 'constructs';
import { Stack, StackProps, RemovalPolicy, } from 'aws-cdk-lib';
import { Code, Function, LayerVersion, Runtime } from 'aws-cdk-lib/aws-lambda';
import { join } from 'path';
import { createPolicyStatement } from '../../shared/policy-statement';
import { IOT_ACTION } from './iot-stack-action';

export class IotStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const motorReponseLambda = this.createMotorResponseLambda(
      'TestLambda',
      'PlaceHolderAppSyncEndpoint',
      IOT_ACTION.MOTOR_RESPONSE_ACTIONS,
    );
  }

  
  createMotorResponseLambda(lambdaName: string, appsyncEndpoint: string, actions: string[]) {
    const gqlLayer = new LayerVersion(this, 'graphql', {
      compatibleRuntimes: [Runtime.NODEJS_16_X, Runtime.NODEJS_14_X],
      code: Code.fromAsset(join(__dirname, '../../assets/lambda_layers/graphql-tag')),
      removalPolicy: RemovalPolicy.DESTROY
    });

    const fetchLayer = new LayerVersion(this, 'cross-fetch', {
      compatibleRuntimes: [Runtime.NODEJS_16_X, Runtime.NODEJS_14_X],
      code: Code.fromAsset(join(__dirname, '../../assets/lambda_layers/cross-fetch')),
      removalPolicy: RemovalPolicy.DESTROY
    });

    const axiosLayer = new LayerVersion(this, 'axios', {
      compatibleRuntimes: [Runtime.NODEJS_16_X, Runtime.NODEJS_14_X],
      code: Code.fromAsset(join(__dirname, '../../assets/lambda_layers/axios')),
      removalPolicy: RemovalPolicy.DESTROY
    });

    const appsyncLayer = new LayerVersion(this, 'appsync', {
      compatibleRuntimes: [Runtime.NODEJS_16_X, Runtime.NODEJS_14_X],
      code: Code.fromAsset(join(__dirname, '../../assets/lambda_layers/aws-appsync')),
      removalPolicy: RemovalPolicy.DESTROY
    });

    const motorResponseLambda = new Function(this, lambdaName, {
      functionName: lambdaName,
      runtime: Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: Code.fromAsset(join(__dirname, '../../lambda-motorResponseResolver')),
      layers:[axiosLayer, gqlLayer, appsyncLayer, fetchLayer]
    });
    motorResponseLambda.addEnvironment('APPSYNC_ENDPOINT', appsyncEndpoint)
      .addToRolePolicy(createPolicyStatement(actions));
    return motorResponseLambda;
  }
}
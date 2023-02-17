import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { IotStack } from '../lib/iot-stack/iot-stack';


const app = new App();
new IotStack(app, 'TestStack');

import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";

export function createPolicyStatement(actions: string[], effect = Effect.ALLOW, resource = ['*']) {
    return new PolicyStatement({
        effect: Effect.ALLOW,
        actions: actions,
        resources: resource
    })
};
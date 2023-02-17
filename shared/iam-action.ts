export const IAM_ACTIONS = {
    DYNAMODB_READ_WRITE_ACCESS: [
        "dynamodb:BatchGetItem",
        "dynamodb:BatchWriteItem",
        "dynamodb:ConditionCheckItem",
        "dynamodb:PutItem",
        "dynamodb:DescribeTable",
        "dynamodb:DeleteItem",
        "dynamodb:GetItem",
        "dynamodb:Scan",
        "dynamodb:Query",
        "dynamodb:UpdateItem"
    ],
    DYNAMODB_LAMBDA_EXEC_ACCESS: [
        "dynamodb:DescribeStream",
        "dynamodb:GetRecords",
        "dynamodb:GetShardIterator",
        "dynamodb:ListStreams",
    ],
    APPSYNC_INVOKE_FULL_ACCESS: [
        "appsync:GraphQL",
        "appsync:GetGraphqlApi",
        "appsync:ListGraphqlApis",
        "appsync:ListApiKeys"
    ],
    SNS_FULL_ACCESS: [
        "sns:*"
    ],
    SNS_PLATFORM_ENDPOINT_ACCESS: [
        "sns:SetEndpointAttributes",
        "sns:GetEndpointAttributes",
        "sns:CreatePlatformEndpoint"
    ],
    IOT_DATA_ACCESS: [
        "iot:Connect",
        "iot:Publish",
        "iot:Subscribe",
        "iot:Receive",
        "iot:GetThingShadow",
        "iot:UpdateThingShadow",
        "iot:DeleteThingShadow",
        "iot:ListNamedShadowsForThing"
    ],
    IOT_FULL_ACCESS: [
        "iot:*"
    ],
    TIMESTREAM_FULL_ACCESS: [
        "timestream:*"
    ]
};
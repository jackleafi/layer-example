export const SQL_STAT_BASIC = 'SELECT * FROM ';
export const SQL_WITH_ID = 'SELECT topic(3) as deviceId, * FROM ';
export const SQL_WITH_ID_TOPIC = 'SELECT *, topic() as topic, topic(2) as deviceId FROM ';
export const IOT_RULE_LOG_PREFIX = '/aws/iot/';

export const CONNECTIVITY_LAMBDA_NAME = 'UpdateConnectInfo';
export const TELEMETRY_LAMBDA_NAME = 'WriteTimestreamTelemetry';
export const LIGHT_INFO_LAMBDA_NAME = 'UpdateLightInfo';
export const FIRMWARE_INFO_LAMBDA_NAME = 'UpdateFirmwareInfo';
export const BATTERY_INFO_LAMBDA_NAME = 'UpdateBatteryInfo';
export const MOTOR_RESPONSE_LAMBDA_NAME = 'MotorResponseResolver';

export const RULES = [
    { ruleName: 'Battery', sqlStat: SQL_WITH_ID_TOPIC + '\'data/+/battery\'' },
    { ruleName: 'Light', sqlStat: SQL_WITH_ID_TOPIC + '\'data/+/light\'' },
    { ruleName: 'Temperature', sqlStat: SQL_WITH_ID_TOPIC + '\'data/+/temperature\'' },
    { ruleName: 'Connected', sqlStat: SQL_STAT_BASIC + '\'$aws/events/presence/connected/+\'' },
    { ruleName: 'Disconnected', sqlStat: SQL_STAT_BASIC + '\'$aws/events/presence/disconnected/+\'' },
    { ruleName: 'Error', sqlStat: SQL_WITH_ID_TOPIC + '\'data/+/error\'' },
    { ruleName: 'Firmware', sqlStat: SQL_WITH_ID_TOPIC + '\'data/+/firmware\'' },
    { ruleName: 'Network', sqlStat: SQL_WITH_ID_TOPIC + '\'data/+/network\'' },
    { ruleName: 'ShadowUpdate', sqlStat: SQL_WITH_ID + '\'$aws/things/+/shadow/update/documents\'' },
    { ruleName: 'Subscribed', sqlStat: SQL_WITH_ID + '\'$aws/events/subscriptions/subscribed/+\'' },
    { ruleName: 'Unsubscribed', sqlStat: SQL_WITH_ID + '\'$aws/events/subscriptions/unsubscribed/+\'' },
    { ruleName: 'DirectionalControl', sqlStat: SQL_WITH_ID_TOPIC + '\'control/+/motor/rsp\'' },

];
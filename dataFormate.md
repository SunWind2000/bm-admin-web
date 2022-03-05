# 前后端接口的JSON数据格式说明

## 一、用户数据
用户数据包含`success`和`error`两种状态，如果为`success`则error_msg为空字符串，
如果为`error`则error_msg为具体的报错信息
```json
{
    "status": "success",
    "error_msg": "",
    "data": [
        {
            "model": "users.user",
            "pk": 1,
            "fields": {
                "username": "admin",
                "nickname": "sunhy",
                "password": "sunhaoyang+123..",
                "email": "sunhaoyang@mail.dhu.edu.cn",
                "phone": "13262646676",
                "gender": "男"
            }
        },
        {
            "model": "users.user",
            "pk": 2,
            "fields": {
                "username": "test_user",
                "nickname": "sunhy",
                "password": "test",
                "email": "sunhaoyang@mail.dhu.edu.cn",
                "phone": "13262646676",
                "gender": "男"
            }
        }
    ]
}
```

## 二、Dashboard数据
Dashboard数据包含`success`和`error`两种状态，如果为`success`则error_msg为空字符串，
如果为`error`则error_msg为具体的报错信息
```json
{
    "status": "success",
    "error_msg": "",
    "data": [
        {
            "model": "system.system",
            "pk": 1,
            "fields": {
                "datetime": "20220227-221030",
                "max_voltage": 23.6,
                "min_voltage": 17.6,
                "total_voltage": 19,
                "max_current": 1.3,
                "min_current": 0.3,
                "soc": 23,
                "max_temperature": 72.9,
                "min_temperature": 65.2,
                "battery_num": 48
            }
        },
        {
            "model": "system.system",
            "pk": 2,
            "fields": {
                "datetime": "20220228-221030",
                "max_voltage": 19.8,
                "min_voltage": 11.4,
                "total_voltage": 18,
                "max_current": 0.6,
                "min_current": 0,
                "soc": 20.3,
                "max_temperature": 73,
                "min_temperature": 64,
                "battery_num": 48
            }
        },
        {
            "model": "system.system",
            "pk": 3,
            "fields": {
                "datetime": "20220301-221030",
                "max_voltage": 18.6,
                "min_voltage": 12.4,
                "total_voltage": 17.3,
                "max_current": 0.6,
                "min_current": 0.1,
                "soc": 19.2,
                "max_temperature": 76,
                "min_temperature": 72,
                "battery_num": 48
            }
        },
        {
            "model": "system.system",
            "pk": 4,
            "fields": {
                "datetime": "20220302-221030",
                "max_voltage": 22,
                "min_voltage": 14.5,
                "total_voltage": 17,
                "max_current": 0.2,
                "min_current": 0,
                "soc": 18,
                "max_temperature": 79,
                "min_temperature": 68,
                "battery_num": 48
            }
        },
        {
            "model": "system.system",
            "pk": 5,
            "fields": {
                "datetime": "20220303-221030",
                "max_voltage": 21.2,
                "min_voltage": 12.5,
                "total_voltage": 16.5,
                "max_current": 0.3,
                "min_current": 0.2,
                "soc": 19.2,
                "max_temperature": 70.3,
                "min_temperature": 65.2,
                "battery_num": 48
            }
        },
        {
            "model": "system.system",
            "pk": 6,
            "fields": {
                "datetime": "20220304-221030",
                "max_voltage": 19.8,
                "min_voltage": 12.9,
                "total_voltage": 16,
                "max_current": 0.7,
                "min_current": 0.5,
                "soc": 15.5,
                "max_temperature": 67,
                "min_temperature": 64.9,
                "battery_num": 48
            }
        },
        {
            "model": "system.system",
            "pk": 7,
            "fields": {
                "datetime": "20220305-221030",
                "max_voltage": 20.5,
                "min_voltage": 13.4,
                "total_voltage": 15.6,
                "max_current": 0.3,
                "min_current": 0,
                "soc": 14.7,
                "max_temperature": 72.2,
                "min_temperature": 65.6,
                "battery_num": 48
            }
        }
    ]
}
```
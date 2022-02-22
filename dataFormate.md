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
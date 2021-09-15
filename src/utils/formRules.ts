// 登录表单验证规则
export const loginFormRules = {
  phone: [
    { required: true, message: "请输入手机号码", trigger: "blur" },
    {
      min: 11,
      max: 11,
      message: "长度在11个字符",
      trigger: "blur",
    },
  ],
  code: [
    { required: true, message: "请输入验证码", trigger: "blur" },
    {
      min: 6,
      max: 6,
      message: "长度在6个字符",
      trigger: "blur",
    },
  ],
};

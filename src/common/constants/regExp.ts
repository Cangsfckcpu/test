export const phoneRegExp = /^[1][3-9][0-9]{9}$/
export const captchaRegExp = /^\d{6}$/
export const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/
export const passwordLengthRegExp = /^\S{8,32}$/
export const passwordCapsRegExp = /^(?=.*[a-z])(?=.*[A-Z]).*$/
export const passwordCapsAndNumberRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/
export const demandMoneyRegExp = /^[0-9]+(.[0-9]{1,2})?$/
export const fileExtensionRegExp = /\.[^.]+$/
// 兼容15位和18位社会信用代码
// export const companyNumberRegExp = /^([0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}|[1-9]\d{14})$/
// 18位社会信用代码
export const companyNumberRegExp = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/
export const companyNameRegExp = /^[a-zA-Z\u4e00-\u9fa5（）&()]{1,25}$/
export const companyContactsRegExp = /^[\u4e00-\u9fa5]{1,16}$/
export const charactersRegExp = /^(-)?\d+(\.\d+)?$/
export const nameReg = /^[\u4E00-\u9FA5]{2,10}$/;
export const idcodeReg = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
 
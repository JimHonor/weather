import { Md5 } from "ts-md5";

type ParameterObject = {
  location: string;
  username: string;
  t: string;
  w: string;
};

export function getSignature(
  parameterObject: ParameterObject,
  privateKey: string
) {
  var keys = [];
  for (let k in parameterObject) {
    if (
      k !== "key" &&
      k !== "sign" &&
      !/^\s+$/.test(k) &&
      !/^\s+$/.test(parameterObject[k as keyof ParameterObject])
    ) {
      keys.push(k);
    }
  }

  keys.sort();

  let str = "";
  for (let i in keys) {
    let k = keys[i];
    if (!/\s+/.test(parameterObject[k as keyof ParameterObject])) {
      str += k + "=" + parameterObject[k as keyof ParameterObject] + "&";
    }
  }
  str = str.slice(0, str.length) + privateKey;

  return Md5.hashStr(str);
}

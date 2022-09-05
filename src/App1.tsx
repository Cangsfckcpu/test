import React, { useCallback, useEffect, useRef } from "react";
import { LikeOutlined, UserOutlined } from "@ant-design/icons";
import type { ProSettings } from "@ant-design/pro-components";
import {
  PageContainer,
  ProLayout,
  SettingDrawer
} from "@ant-design/pro-components";
import { Avatar, Button, Descriptions, Result, Space, Statistic } from "antd";
import { useState } from "react";
import defaultProps from "./defaultProps";
import Captcha from "react-captcha-code";
import SliderCaptcha from '@slider-captcha/react'
import { img } from './a'

const App = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true
  });
  const [pathname, setPathname] = useState("/welcome");
  const handleChange = useCallback((captcha) => {
    console.log('captcha:', captcha);
  }, []);

  const captchaRef = useRef<any>();

  const handleClick = () => {
    // 刷新验证码
    (captchaRef as any).current.refresh();
  };
  const verifiedCallback = (token: any) => {
    console.log('Captcha token: ' + token);
  }
  const [buffer, setBuffer] = useState<any>()
  useEffect(() => {
    let url = img.replace(/^data:image\/\w+;base64,/, '')
    const buffer = new Buffer(url)
    setBuffer(buffer)
  }, [])
  return (
    <div
      id="test-pro-layout"
      style={{
        height: "100vh"
      }}
    >
      <ProLayout
        {...defaultProps}
        location={{
          pathname
        }}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || "/welcome");
            }}
          >
            {dom}
          </a>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
        {...settings}
      >
        <PageContainer
          ghost
          header={{
            title: ''
          }}
        >
          <Captcha ref={captchaRef} charNum={6} onChange={handleChange} />
          <SliderCaptcha
            create="https://example.com/captcha/create"
            verify="https://example.com/captcha/verify"
            callback={verifiedCallback}
          />
          <div>
            <button onClick={handleClick}>更换验证码</button>
          </div>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById("test-pro-layout")}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams={false}
      />
    </div>
  );
};
export default App
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { cfl } from '@/utils';

const EntryPage: React.FC = () => {
  const [t, i18n] = useTranslation();

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const onFinish = (values: FieldType) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <div
        style={{
          height: '50px'
        }}
      >
        <Button onClick={() => i18n.changeLanguage('zh')}>CN</Button>
        <Button onClick={() => i18n.changeLanguage('en')}>EN</Button>
      </div>

      <div
        style={{
          height: 'calc(100vh - 50px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label={cfl(t('common.username'))}
            name="username"
            rules={[
              { required: true, message: cfl(t('entry.usernameErrorMsg')) }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label={cfl(t('common.password'))}
            name="password"
            rules={[
              { required: true, message: cfl(t('entry.passwordErrorMsg')) }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>{cfl(t('common.rememberMe'))}</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              {cfl(t('common.submit'))}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EntryPage;

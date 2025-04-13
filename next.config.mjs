/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
import withAntdLess from 'next-plugin-antd-less';

const nextConfig = {
  /* config options here */
};
const withNextIntl = createNextIntlPlugin()(nextConfig);
export default withAntdLess(withNextIntl);

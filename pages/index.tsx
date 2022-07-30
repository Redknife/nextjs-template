import { NextPage } from 'next';

import { ThemeSwitcher } from 'components/ThemeSwitcher';

const IndexPage: NextPage = () => (
  <>
    Theme <ThemeSwitcher />
    <h1>Hello Wolrd 👋</h1>
  </>
);

export default IndexPage;

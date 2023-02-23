import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import TabLight from "../../assets/tab_pref-light.png";
import TabDark from "../../assets/tab_pref-dark.png";

class Head extends React.Component {
  render(): ReactNode {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Beta</title>
        <meta
          name="description"
          content="This is the portfolio of Leon Hochwimmer. Get in touch!"
        />
        <link
          rel="icon"
          href={TabLight}
          media="(prefers-color-scheme: light)"
        />
        <link rel="icon" href={TabDark} media="(prefers-color-scheme: dark)" />
      </Helmet>
    );
  }
}

export default Head;

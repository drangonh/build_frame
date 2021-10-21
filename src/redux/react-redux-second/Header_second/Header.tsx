import { GlobalOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Layout, Menu, Typography } from "antd";
import { MenuInfo } from "rc-menu/lib/interface";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useSelector } from "@/redux/hook";

import {
  addLanguageActionCreator,
  ChangeLanguageActionCreator
} from "../language/languageAction";
import styles from "./Header.module.less";

const HeaderSecond: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const language = useSelector(store => store.languageReducer.language);
  const languageList = useSelector(store => store.languageReducer.languageList);

  const { t } = useTranslation();

  const menuClickHandler = (e: MenuInfo) => {
    if (e.key === "new") {
      // 处理新语言添加action
      const action = addLanguageActionCreator("新语言", "new_lang")
      dispatch(action)

    } else {
      const action = ChangeLanguageActionCreator(e.key === 'zh' ? 'zh' : 'en')
      dispatch(action);
    }
  };

  return (
    <div className={styles["app-header"]}>
      {/* top-header */}
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text>{t("header.slogan")}</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu onClick={(e) => menuClickHandler(e)}>
                {languageList && languageList.map((l) => {
                  return <Menu.Item key={l.code}>{l.name}</Menu.Item>;
                })}
                <Menu.Item key="new">
                  {t("header.add_new_language")}
                </Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            {language === "zh" ? "中文" : "English"}
          </Dropdown.Button>
          <Button.Group className={styles["button-group"]}>
            <Button onClick={() => history.push("register")}>
              {t("header.register")}
            </Button>
            <Button onClick={() => history.push("signIn")}>
              {t("header.signin")}
            </Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles["main-header"]}>
        <span
          tabIndex={0}
          role="button"
          onClick={() => history.push("/")}
          onKeyDown={() => history.push("/")}
        >
          <Typography.Title level={3} className={styles.title}>
            {t("header.title")}
          </Typography.Title>
        </span>
        <Input.Search
          placeholder="请输入旅游目的地、主题、或关键字"
          className={styles["search-input"]}
        />
      </Layout.Header>
      <Menu mode="horizontal" className={styles["main-menu"]}>
        <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
        <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
        <Menu.Item key="3"> {t("header.group")} </Menu.Item>
        <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
        <Menu.Item key="5"> {t("header.private")} </Menu.Item>
        <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
        <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
        <Menu.Item key="8"> {t("header.local")} </Menu.Item>
        <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
        <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
        <Menu.Item key="11"> {t("header.study")} </Menu.Item>
        <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
        <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
        <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
        <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
        <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
      </Menu>
    </div>
  );
}

export {
  HeaderSecond
};


import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EditorInput from "../../Editor/EditorInput/EditorInput";
import Output from "../../Editor/Output/Output";
import MobileProjectBar from "../MobileProjectBar/MobileProjectBar";

import "../../../assets/stylesheets/MobileProject.scss";
import { useDispatch, useSelector } from "react-redux";
import CodeIcon from "../../../assets/icons/code.svg";
import MenuIcon from "../../../assets/icons/menu.svg";
import PreviewIcon from "../../../assets/icons/preview.svg";
import { useTranslation } from "react-i18next";
import Sidebar from "../../Menus/Sidebar/Sidebar";
import { showSidebar } from "../../../redux/EditorSlice";
import Button from "../../Button/Button";

const MobileProject = ({ withSidebar, sidebarOptions = [] }) => {
  const projectType = useSelector((state) => state.editor.project.project_type);
  const sidebarShowing = useSelector((state) => state.editor.sidebarShowing);
  const codeRunTriggered = useSelector(
    (state) => state.editor.codeRunTriggered,
  );
  const [selectedTab, setSelectedTab] = useState(0);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const openSidebar = () => dispatch(showSidebar());

  useEffect(() => {
    if (codeRunTriggered) {
      setSelectedTab(1);
    }
  }, [codeRunTriggered]);

  return (
    <div className="proj-container proj-editor-container proj-container--mobile">
      {sidebarShowing && <Sidebar options={sidebarOptions} />}
      <Tabs
        forceRenderTabPanel={true}
        selectedIndex={selectedTab}
        onSelect={(index) => setSelectedTab(index)}
      >
        <TabPanel>
          <EditorInput />
        </TabPanel>
        <TabPanel>
          <Output />
        </TabPanel>
        <MobileProjectBar />
        <div className="react-tabs__tab-container mobile-nav">
          {withSidebar && (
            <Button
              className="mobile-nav__menu"
              ButtonIcon={MenuIcon}
              onClickHandler={openSidebar}
              title={t("sidebar.expand")}
            />
          )}
          <TabList>
            <Tab>
              <CodeIcon />
              <span className="react-tabs__tab-text">{t("mobile.code")}</span>
            </Tab>
            <Tab>
              <PreviewIcon />
              <span className="react-tabs__tab-text">
                {projectType === "html"
                  ? t("mobile.preview")
                  : t("mobile.output")}
              </span>
            </Tab>
          </TabList>
        </div>
      </Tabs>
    </div>
  );
};

export default MobileProject;

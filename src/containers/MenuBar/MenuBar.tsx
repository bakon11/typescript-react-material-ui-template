import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from "@mui/material";
import Grid from '@mui/material/Grid';
import { useDarkMode } from "../../hooks/useDarkMode";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useTranslation } from "react-i18next";
import LanguageMenu from "../LanguageMenu";

const MenuBar: React.FC = () => {
  const [ darkMode, setDarkMode ]: any = useDarkMode();
  const { t, i18n } = useTranslation();

  return (
    <>
      <AppBar position="sticky" color="default" elevation={0}>
        <Toolbar>
          <Grid container alignContent="center" alignItems="center" justifyContent="space-between">
            <Typography variant="h6">{t("Home")}</Typography>
            <Typography variant="caption">typescript-react-material-ui</Typography>
            <Grid item>
              <LanguageMenu />
              <Tooltip title={t("Toggle Dark Mode")}>
                <IconButton onClick={ () => setDarkMode(darkMode ? false : true) }>
                  {darkMode ? <Brightness3Icon /> : <WbSunnyIcon />}
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MenuBar;

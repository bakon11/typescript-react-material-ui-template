import React from "react";
import { ThemeProvider, AppBar, Toolbar, Typography, IconButton, Tooltip, CssBaseline } from "@mui/material";
import Grid from '@mui/material/Grid';
import { useDarkMode } from "../../hooks/useDarkMode";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { lightTheme, darkTheme } from "../../themes/theme";
import { useTranslation } from "react-i18next";
import LanguageMenu from "../LanguageMenu";

import "./Index.css";

const MyApp: React.FC = () => {
  const darkMode: any = useDarkMode();
  const { t, i18n } = useTranslation();
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" color="default" elevation={0}>
        <Toolbar>
          <Grid container alignContent="center" alignItems="center" justifyContent="space-between">
            <Typography variant="h6">{t("Pristine")}</Typography>
            <Typography variant="caption">typescript-react-material-ui</Typography>
            <Grid item>
              <LanguageMenu />
              <Tooltip title={t("Toggle Dark Mode")}>
                <IconButton onClick={darkMode}>
                  {darkMode ? <Brightness3Icon /> : <WbSunnyIcon />}
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div>
        <CssBaseline />
        <Grid container alignContent="center" alignItems="center" justifyContent="center" direction="column">
          <img className="logo" alt="logo" src={darkMode
            ? "https://github.com/etclabscore/pristine-media-assets/blob/master/pristine-logo-dark/pristine-logo-dark%20(PNG)/256x256.png?raw=true" //tslint:disable-line
            : "https://github.com/etclabscore/pristine-media-assets/blob/master/pristine-logo/pristine-logo%20(PNG)/256x256.png?raw=true" //tslint:disable-line
          } style={{ paddingTop: "10%" }} />
          <Typography variant="caption" style={{ position: "absolute", bottom: "10px" }}>
            {t("Date", { date: new Date() })}
          </Typography>
        </Grid>
      </div>
    </ThemeProvider >
  );
};

export default MyApp;

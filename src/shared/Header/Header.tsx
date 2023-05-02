import React from "react";
import Select, { SingleValue } from "react-select";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { Theme } from "../../context/ThemeContext";
import { useCustomDispatch } from "../../hooks/store";
import { useTheme } from "../../hooks/useTheme";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import s from "./Header.module.scss";

interface Props { }

interface Option {
  value: string,
  label: string,
}

export const Header = (props: Props) => {
  const theme = useTheme();

  const options: Array<Option> = [
    { value: "city-1", label: "Moscow" },
    { value: "city-2", label: "Saint Petersburg" },
    { value: "city-3", label: "Novgorod" },
    { value: "city-4", label: "Kazan" },
    { value: "city-5", label: "Krasnodar" },
    { value: "city-6", label: "Sochi" },
    { value: "city-7", label: "Vladivostok" },
    { value: "city-8", label: "Rostov-on-Don" },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.DARK ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
    menu: (styles: any) => ({
      ...styles,
      zIndex: 100,
      backgroundColor: theme.theme === Theme.DARK ? "#4f4f4f" : "#fff",
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  };

  const dispatch = useCustomDispatch();

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const handleChange = (selectedOption: SingleValue<Option>) => {
    if (selectedOption) {
      const choosenCity: string = selectedOption.label;
      dispatch(fetchCurrentWeather(choosenCity.toLowerCase()));
    }
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>Weather App</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change__theme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          options={options}
          styles={colourStyles}
          onChange={handleChange}
        />
      </div>
    </header>
  );
};

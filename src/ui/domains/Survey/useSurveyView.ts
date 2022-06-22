import { useState } from "react";

export const useSurveyView = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const [startDateSelected, setStartDateSelected] = useState(false);
  const [endDateSelected, setEndDateSelected] = useState(false);

  const handleStartDateChange = (newValue: Date | null) => {
    setStartDate(newValue);
    setStartDateSelected(true);
  };

  const handleEndDateChange = (newValue: Date | null) => {
    setEndDate(newValue);
    setEndDateSelected(true);
  };

  const [selectedBtnOne, setSelectedBtnOne] = useState("");
  const [selectedBtnTwo, setSelectedBtnTwo] = useState("");
  const [selectedBtnThree, setSelectedBtnThree] = useState("");
  const [selectedBtnFour, setSelectedBtnFour] = useState("");
  const [selectedBtnFive, setSelectedBtnFive] = useState("");
  const [selectedBtnSix, setSelectedBtnSix] = useState("");
  const [selectedBtnSeven, setSelectedBtnSeven] = useState("");
  const [selectedBtnEight, setSelectedBtnEight] = useState("");
  const [selectedBtnNine, setSelectedBtnNine] = useState("");

  const handleChangeBtnOne = (e: string) => setSelectedBtnOne(e);
  const handleChangeBtnTwo = (e: string) => setSelectedBtnTwo(e);
  const handleChangeBtnThree = (e: string) => setSelectedBtnThree(e);
  const handleChangeBtnFour = (e: string) => setSelectedBtnFour(e);
  const handleChangeBtnFive = (e: string) => setSelectedBtnFive(e);
  const handleChangeBtnSix = (e: string) => setSelectedBtnSix(e);
  const handleChangeBtnSeven = (e: string) => setSelectedBtnSeven(e);
  const handleChangeBtnEight = (e: string) => setSelectedBtnEight(e);
  const handleChangeBtnnine = (e: string) => setSelectedBtnNine(e);

  const handleButtonDisabled =
    selectedBtnOne === "" ||
    selectedBtnTwo === "" ||
    selectedBtnThree === "" ||
    selectedBtnFour === "" ||
    selectedBtnFive === "" ||
    selectedBtnSeven === "" ||
    selectedBtnEight === "" ||
    selectedBtnNine === ""
      ? true
      : false;

  const handleDateChange = startDateSelected && endDateSelected ? false : true;

  const handleButtonClick = () => {
    console.log(
      selectedBtnOne,
      selectedBtnTwo,
      selectedBtnThree,
      selectedBtnFour,
      selectedBtnFive,
      selectedBtnSix,
      selectedBtnSeven,
      selectedBtnEight,
      selectedBtnNine
    );
  };

  return {
    one: {
      value: selectedBtnOne,
      handleChange: handleChangeBtnOne,
    },
    two: {
      value: selectedBtnTwo,
      handleChange: handleChangeBtnTwo,
    },
    three: {
      value: selectedBtnThree,
      handleChange: handleChangeBtnThree,
    },
    four: {
      value: selectedBtnFour,
      handleChange: handleChangeBtnFour,
    },
    five: {
      value: selectedBtnFive,
      handleChange: handleChangeBtnFive,
    },
    six: {
      value: selectedBtnSix,
      handleChange: handleChangeBtnSix,
    },
    seven: {
      value: selectedBtnSeven,
      handleChange: handleChangeBtnSeven,
    },
    eight: {
      value: selectedBtnEight,
      handleChange: handleChangeBtnEight,
    },
    nine: {
      value: selectedBtnNine,
      handleChange: handleChangeBtnnine,
    },
    buttonState: {
      disabled: handleButtonDisabled || handleDateChange,
      onClick: handleButtonClick,
    },

    dateState: {
      startDateState: {
        value: startDate,
        onChange: handleStartDateChange,
        selected: startDateSelected,
      },
      endDateState: {
        value: endDate,
        onChange: handleEndDateChange,
        selected: endDateSelected,
      },
    },
  };
};

import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

import "./Input.css";
import Details from "./Details";

const Input = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const [data, setData] = useState();
  const [showForm, setShowForm] = useState(true);

  const onSkillChange = (e) => {
    let selectedSkill = [...skills];

    if (e.checked) selectedSkill.push(e.value);
    else selectedSkill.splice(selectedSkill.indexOf(e.value), 1);

    setSkills(selectedSkill);
  };

  useEffect(() => {
    let item = JSON.parse(localStorage.getItem("dummy"));

    if (item) {
      setData(item);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const dummy = {
      name,
      age,
      gender,
      skills,
    };

    localStorage.setItem("dummy", JSON.stringify(dummy));
    setData(dummy);
    setShowForm(false);
    console.log(data);
  }

  const reset = () => {
    setName("");
    setAge("");
    setGender("");
    setSkills([]);
    setData(null);
    setShowForm(true);
    localStorage.clear();
  };
  return (
    <div className="form-demo">
      {showForm ? (
        <div className="flex justify-content-center">
          <div className="card box">
            <h3 className="text-center">Enter your details</h3>
            <form className="p-fluid" onSubmit={(e) => handleSubmit(e)}>
              <div className="field">
                <span className="p-float-label">
                  <InputText
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </span>
              </div>
              <div className="field">
                <span className="p-float-label">
                  <InputText
                    placeholder="Age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </span>
              </div>
              <h6 className="text-lg m-1">Gender</h6>
              <div className="field-radiobutton block">
                <div className="pb-2">
                  <RadioButton
                    inputId="g1"
                    name="gender"
                    value="Male"
                    onChange={(e) => setGender(e.value)}
                    checked={gender === "Male"}
                  />
                  <label htmlFor="g1">Male</label>
                </div>
                <div className="pb-2">
                  <RadioButton
                    inputId="g2"
                    name="gender"
                    value="Female"
                    onChange={(e) => setGender(e.value)}
                    checked={gender === "Female"}
                  />
                  <label htmlFor="g2">Female</label>
                </div>
                <div>
                  <RadioButton
                    inputId="g3"
                    name="gender"
                    value="Other"
                    onChange={(e) => setGender(e.value)}
                    checked={gender === "Other"}
                  />
                  <label htmlFor="g3">Other</label>
                </div>
              </div>
              <h6 className="text-lg m-1">Skills</h6>
              <div className="field-checkbox">
                <Checkbox
                  inputId="s1"
                  name="skill"
                  value="HTML & CSS"
                  onChange={onSkillChange}
                  checked={skills.indexOf("HTML & CSS") !== -1}
                />
                <label htmlFor="s1">HTML & CSS</label>
              </div>
              <div className="field-checkbox">
                <Checkbox
                  inputId="s2"
                  name="skill"
                  value="JavaScript"
                  onChange={onSkillChange}
                  checked={skills.indexOf("JavaScript") !== -1}
                />
                <label htmlFor="s">JavaScript</label>
              </div>
              <div className="field-checkbox">
                <Checkbox
                  inputId="s3"
                  name="skill"
                  value="React & React-Redux"
                  onChange={onSkillChange}
                  checked={skills.indexOf("React & React-Redux") !== -1}
                />
                <label htmlFor="s3">React & React-Redux</label>
              </div>
              <div className="field-checkbox">
                <Checkbox
                  inputId="s4"
                  name="skill"
                  value="Vue Js"
                  onChange={onSkillChange}
                  checked={skills.indexOf("Vue Js") !== -1}
                />
                <label htmlFor="s4">Vue Js</label>
              </div>
              <Button type="submit" label="Submit" className="mt-2" />
            </form>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Details data={data} />
          <Button type="reset" label="Reset" onClick={reset} className="mt-2" />
        </div>
      )}
    </div>
  );
};

export default Input;

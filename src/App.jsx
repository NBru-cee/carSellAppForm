import React, { useState } from "react";
import { TextField, Box, Stack, Button, Typography } from "@mui/material";

function App() {
      const [carMake, setCarMake] = useState("");
      const [carModel, setCarModel] = useState("");
      const [year, setYear] = useState("");
      const [mileage, setMileage] = useState("");
      const [condition, setCondition] = useState("");
      const [features, setFeatures] = useState([]);
      const [transmission, setTransmission] = useState("");
      const [priceRange, setPriceRange] = useState(0);
      const [contactNumber, setContactNumber] = useState("");

      const handleFormSubmit = (event) => {
            event.preventDefault();
            console.log("Form submitted:", {
                  carMake,
                  carModel,
                  year,
                  mileage,
                  condition,
                  features,
                  transmission,
                  priceRange,
                  contactNumber,
            });
      };

      const handleFeatureChange = (event) => {
            const feature = event.target.value;
            const isChecked = event.target.checked;
            if (isChecked) {
                  setFeatures([...features, feature]);
            } else {
                  setFeatures(features.filter((f) => f !== feature));
            }
      };

      return (
            <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  py="3rem"
            >
                  <Typography variant="h5">Car Sell App Form</Typography>
                  <form onSubmit={handleFormSubmit}>
                        <TextField
                              label=" Car Make"
                              type="text"
                              value={carMake}
                              onChange={(e) => setCarMake(e.target.value)}
                              sx={{ margin: "1rem 0" }}
                        />
                        <br />
                        <label>
                              <TextField
                                    label=" Car Model"
                                    type="text"
                                    value={carModel}
                                    onChange={(e) =>
                                          setCarModel(e.target.value)
                                    }
                                    sx={{ margin: "1rem 0" }}
                              />
                        </label>
                        <br />
                        <label>
                              <TextField
                                    type="date"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    sx={{ margin: "1rem 0" }}
                              />
                        </label>
                        <br />
                        <label>
                              <TextField
                                    label="Mileage:"
                                    type="number"
                                    value={mileage}
                                    onChange={(e) => setMileage(e.target.value)}
                                    sx={{ width: "20rem", margin: "1rem 0" }}
                              />
                        </label>
                        <br />
                        <label>
                              Condition:
                              <br />
                              <label>
                                    <input
                                          type="radio"
                                          name="condition"
                                          value="Excellent"
                                          checked={condition === "Excellent"}
                                          onChange={(e) =>
                                                setCondition(e.target.value)
                                          }
                                    />
                                    Excellent
                              </label>
                              <br />
                              <label>
                                    <input
                                          type="radio"
                                          name="condition"
                                          value="Good"
                                          checked={condition === "Good"}
                                          onChange={(e) =>
                                                setCondition(e.target.value)
                                          }
                                    />
                                    Good
                              </label>
                              <br />
                              <label>
                                    <input
                                          type="radio"
                                          name="condition"
                                          value="Fair"
                                          checked={condition === "Fair"}
                                          onChange={(e) =>
                                                setCondition(e.target.value)
                                          }
                                    />
                                    Fair
                              </label>
                              <br />
                              <label>
                                    <input
                                          type="radio"
                                          name="condition"
                                          value="Poor"
                                          checked={condition === "Poor"}
                                          onChange={(e) =>
                                                setCondition(e.target.value)
                                          }
                                    />
                                    Poor
                              </label>
                        </label>
                        <br />
                        <label>
                              Features:
                              <br />
                              <label>
                                    <input
                                          type="checkbox"
                                          value="Air Conditioning"
                                          onChange={handleFeatureChange}
                                    />
                                    Air Conditioning
                              </label>
                              <br />
                              <label>
                                    <input
                                          type="checkbox"
                                          value="Power Steering"
                                          onChange={handleFeatureChange}
                                    />
                                    Power Steering
                              </label>
                              <br />
                              <label>
                                    <input
                                          type="checkbox"
                                          value="Power Windows"
                                          onChange={handleFeatureChange}
                                    />
                                    Power Windows
                              </label>
                              <br />
                              <label>
                                    <input
                                          type="checkbox"
                                          value="ABS"
                                          onChange={handleFeatureChange}
                                    />
                                    ABS
                              </label>
                              <br />
                              <label>
                                    <input
                                          type="checkbox"
                                          value="Navigation System"
                                          onChange={handleFeatureChange}
                                    />
                                    Navigation System
                              </label>
                        </label>
                        <br />
                        <Box display="flex" gap="2rem">
                              <select
                                    value={transmission}
                                    onChange={(e) =>
                                          setTransmission(e.target.value)
                                    }
                              >
                                    <option value="transmission">
                                          Transmission
                                    </option>
                                    <option value="manual">Manual</option>
                                    <option value="automatic">Automatic</option>
                              </select>
                        </Box>

                        <Stack maxWidth={200}>
                              <label htmlFor="price">Price</label>
                              <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="1"
                                    id="price"
                                    value={priceRange}
                                    onChange={(e) =>
                                          setPriceRange(e.target.value)
                                    }
                              />
                              <TextField
                                    label="Phone Number"
                                    type="number"
                                    onChange={(e) =>
                                          setContactNumber(e.target.value)
                                    }
                              />
                        </Stack>
                        <Box>
                              <Button
                                    variant="contained"
                                    color="success"
                                    type="submit"
                              >
                                    Submit
                              </Button>
                        </Box>
                  </form>
            </Box>
      );
}

export default App;

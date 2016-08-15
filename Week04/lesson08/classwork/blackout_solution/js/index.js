var lights = "on";

function switchLights() {
  if (lights === "on") {
    document.querySelector("body").classList.add("dark");
    lights = "off";
  } else {
    document.querySelector("body").classList.remove("dark");
    lights = "on";
  }
}

document.querySelector("#light_switch").onclick = switchLights;

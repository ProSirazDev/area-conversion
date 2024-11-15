const conversionFactors = {
  'squareMeters': 1,
  'squareKilometers': 1_000_000,
  'acres': 4047,
  'hectares': 10_000,
  'bigha': 1338,
  'katha': 67,
  'chitak': 13.38,
  'satak': 40.47, // 1 satak is approximately 40.47 square meters (4047 m² / 100)
  'cottah': 66.9,
  'guntha': 101.17,
  'decimal': 40.47  // 1 decimal is approximately 40.47 square meters (4047 m² / 100)
};

function convertArea() {
  const areaValue = parseFloat(document.getElementById('areaInput').value);
  const fromUnit = document.getElementById('inputUnitSelect').value;
  const toUnit = document.getElementById('outputUnitSelect').value;

  // Validate input
  if (isNaN(areaValue) || !fromUnit || !toUnit) {
    document.querySelector('.result').innerText = "Please enter a valid number and select units.";
    return;
  }

  // Convert the area to square meters
  const areaInSquareMeters = areaValue * conversionFactors[fromUnit];

  // Convert to the target unit
  const convertedValue = areaInSquareMeters / conversionFactors[toUnit];

  // Display the result
  document.querySelector('.result').innerText = `${areaValue} ${fromUnit} is equal to ${convertedValue.toFixed(2)} ${toUnit}`;
}

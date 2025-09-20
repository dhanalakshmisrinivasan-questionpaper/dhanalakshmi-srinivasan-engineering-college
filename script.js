// --- 1. DATABASE OF PAPERS ---
const questionPapers = [
  {
    'subject_name': 'Space Science',
    'year': 2020,
    'title': "U20AS404 - Space Science (Q).pdf",
    'download_url': 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AS404 - Space Science (Q).pdf',
    'view_url': 'https://drive.google.com/file/d/1-LnB2auikYgGbIOdNaYLh6VJl3j5eA0J/view?usp=sharing'
  },
  {
    "subject_name": "Biopharmaceutical Technology",
    "year": 2020,
    "title": "U20BT507_ Biopharmaceutical Technology(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BT507_ Biopharmaceutical Technology(Q).pdf",
    "view_url": "https://drive.google.com/file/d/10CEC3-vTXz-LNtzz7zPxA7cf3DPOdfHo/view?usp=sharing"
  },
  {
    "subject_name": "Bioprocess Engineering",
    "year": 2020,
    "title": "U20BT503 & Bioprocess Engineering(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BT503 & Bioprocess Engineering(Q).pdf",
    "view_url": "https://drive.google.com/file/d/10nMVytrA0Wb-8331W4hGbUyIeAU9dch3/view?usp=sharing"
  },
  {
    "subject_name": "Foundation of Data Science",
    "year": 2020,
    "title": "U20AI603 - Foundation of Data Science (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AI603 - Foundation of Data Science (Q).pdf",
    "view_url": "https://drive.google.com/file/d/11Hf1UbgnH2POTK44mU65X90booR3VGK1/view?usp=sharing"
  },
  {
    "subject_name": "CHEMICL PROCES CALCULATION",
    "year": 2020,
    "title": "U20CH304 CHEMICL PROCES CALCULATION(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CH304 CHEMICL PROCES CALCULATION(Q).pdf",
    "view_url": "https://drive.google.com/file/d/11_HvEfs2C9VrE05q3X1P_N3ulQ-MI98Z/view?usp=sharing"
  },
  {
    "subject_name": "Computer Networks",
    "year": 2020,
    "title": "U20AI401 , U20CS404 & U20IT403 - Computer Networks (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AI401 , U20CS404 & U20IT403 - Computer Networks (Q).pdf",
    "view_url": "https://drive.google.com/file/d/12NV9vwDRgZw-tSW0MajkVXeHLs-KfNtJ/view?usp=sharing"
  },
  {
    "subject_name": "Chemical Process Calculation",
    "year": 2020,
    "title": "U20CH304 Chemical Process Calculation(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CH304 Chemical Process Calculation(Q).pdf",
    "view_url": "https://drive.google.com/file/d/12P6SdUkhf1su0d2aphlpZD5V-cmyjPy_/view?usp=sharing"
  },
  {
    "subject_name": "ADVANCED DATABASE TECHNOLOGY",
    "year": 2023,
    "title": "P23CAT21 – ADVANCED DATABASE TECHNOLOGY(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/P23CAT21 – ADVANCED DATABASE TECHNOLOGY(Q).pdf",
    "view_url": "https://drive.google.com/file/d/13bdxenGPvwwW_Ptjma3PO2Zn0JfLuOuu/view?usp=sharing"
  },
  {
    "subject_name": "Deep Learning",
    "year": 2020,
    "title": "U20AI604 - Deep Learning (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AI604 - Deep Learning (Q).pdf",
    "view_url": "https://drive.google.com/file/d/13r4BGnUT73MlSZuWh_g3MhGqtO9RV_Il/view?usp=sharing"
  },
  {
    "subject_name": "PRE- STRESSED CONCRETE STRUCTURES",
    "year": 2020,
    "title": "U20CE731 - PRE- STRESSED CONCRETE STRUCTURES.pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE731 - PRE- STRESSED CONCRETE STRUCTURES.pdf",
    "view_url": "https://drive.google.com/file/d/149ysU1uC9I2Xs0w5BROQaBi71Yk5n9-Y/view?usp=sharing"
  },
  {
    "subject_name": "Elements of Spaceflight",
    "year": 2020,
    "title": "U20AS303 – Elements of Spaceflight (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AS303 – Elements of Spaceflight (Q).pdf",
    "view_url": "https://drive.google.com/file/d/14slsZxfn6KFTf_xFcir1NPUPvZPFPd96/view?usp=sharing"
  },
  {
    "subject_name": "HEAT AND MASS TRANSFER OPERATION",
    "year": 2020,
    "title": "U20BT504  HEAT AND MASS TRANSFER OPERATION (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BT504  HEAT AND MASS TRANSFER OPERATION (Q).pdf",
    "view_url": "https://drive.google.com/file/d/16Mu4V8D2k1596qi4ISZ7TX7CjVk_ZqAI/view?usp=sharing"
  },
  {
    "subject_name": "Computer Architecture and Organization",
    "year": 2020,
    "title": "U20AI302 - Computer Architecture and Organization(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AI302 - Computer Architecture and Organization(Q).pdf",
    "view_url": "https://drive.google.com/file/d/16T8oQ7PtkBTBlvSkgP131D_g8PUv95ij/view?usp=sharing"
  },
  {
    "subject_name": "Data Visualization Techniques",
    "year": 2020,
    "title": "U20AI704 - Data Visualization Techniques(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AI704 - Data Visualization Techniques(Q).pdf",
    "view_url": "https://drive.google.com/file/d/16fNgSGXCYqT8kIFYsdsceNYXokN-ENjg/view?usp=sharing"
  },
  {
    "subject_name": "Microprocessors and Microcontrollers",
    "year": 2020,
    "title": "U20BM401 & U20EC401 - Microprocessors and Microcontrollers (Q) - Common to CSE.pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM401 & U20EC401 - Microprocessors and Microcontrollers (Q) - Common to CSE.pdf",
    "view_url": "https://drive.google.com/file/d/17FhwVHatjCWcUSXLS1RXlTmMIG13N5-3/view?usp=sharing"
  },
  {
    "subject_name": "Organizational Design, Change and Development",
    "year": 2023,
    "title": "P23BAEH3 - Organizational Design, Change and Development(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/P23BAEH3 - Organizational Design, Change and Development(Q).pdf",
    "view_url": "https://drive.google.com/file/d/17Twb12pajJ8KeN23KkGFDhSulQfVdoyo/view?usp=sharing"
  },
  {
    "subject_name": "Java Programming",
    "year": 2020,
    "title": "U20AI625 - Java Programming (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AI625 - Java Programming (Q).pdf",
    "view_url": "https://drive.google.com/file/d/185n2Vh6aIb1XPiEl4zXpNYVatLbJ06qK/view?usp=sharing"
  },
  {
    "subject_name": "Medical Imaging Techniques",
    "year": 2020,
    "title": "U20BM603 - Medical Imaging Techniques (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM603 - Medical Imaging Techniques (Q).pdf",
    "view_url": "https://drive.google.com/file/d/18hnhkAn5xgm7kMuz6Sx-K7Wqdvu2Qlcc/view?usp=sharing"
  },
  {
    "subject_name": "HYDRAULICS AND HYDRAULIC MACHINERY",
    "year": 2020,
    "title": "U20CE403 - HYDRAULICS AND HYDRAULIC MACHINERY (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE403 - HYDRAULICS AND HYDRAULIC MACHINERY (Q).pdf",
    "view_url": "https://drive.google.com/file/d/18saN35rmwtWzZqINa4oCsVPfnD9mbbx1/view?usp=sharing"
  },
  {
    "subject_name": "Artificial Intelligence And Machine Learning",
    "year": 2020,
    "title": "U20AI502 - Artificial Intelligence And Machine Learning(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AI502 - Artificial Intelligence And Machine Learning(Q).pdf",
    "view_url": "https://drive.google.com/file/d/195TPDXNiXjW4B56U-H6c4dhWwwpgh1X1/view?usp=sharing"
  },
  {
    "subject_name": "Mass Transfer - I",
    "year": 2020,
    "title": "U20CH503– Mass Transfer - I(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CH503– Mass Transfer - I(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1A07zfwIfvCjHoIrIqRzQpo3-G4ta1tuR/view?usp=sharing"
  },
  {
    "subject_name": "Site Investigation Methods and Practices",
    "year": 2020,
    "title": "U20CE611 - Site Investigation Methods and Practices (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE611 - Site Investigation Methods and Practices (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1A9gqqIEu9Itw-pLbSHg6v-X0DxGJHj_H/view?usp=sharing"
  },
  {
    "subject_name": "Transportation Engineering",
    "year": 2020,
    "title": "U20CE404 - Transportation Engineering (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE404 - Transportation Engineering (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1BjvzyzE-_moXB55iBPeOzeut6PZ670pR/view?usp=sharing"
  },
  {
    "subject_name": "Space Propulsion",
    "year": 2020,
    "title": "U20AS502 Space Propulsion(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AS502 Space Propulsion(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1BpJUZ6vOgfpT462fNhza8KC1C5mGalYB/view?usp=sharing"
  },
  {
    "subject_name": "Essentials of Bioinformatics",
    "year": 2020,
    "title": "U20BT501  Essentials of Bioinformatics(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BT501  Essentials of Bioinformatics(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1CtR-jKBNM7fuPa8xPA3rY3_7Rva27pG4/view?usp=sharing"
  },
  {
    "subject_name": "ADVANCED ANTENNA DESIGN",
    "year": 2023,
    "title": "P23CUVE34 - ADVANCED ANTENNA DESIGN(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/P23CUVE34 - ADVANCED ANTENNA DESIGN(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1DiwGa-3ZAPJyfTtEjL0q9S2y-T1Z5y9R/view?usp=sharing"
  },
  {
    "subject_name": "Data Structures and OOPS",
    "year": 2020,
    "title": "U20CS301 - Data Structures and OOPS(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CS301 - Data Structures and OOPS(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1E_ARvCd0Dd6X0H15IhabZHn5pfAjOtSe/view?usp=sharing"
  },
  {
    "subject_name": "Geotechnical Engineering-II",
    "year": 2020,
    "title": "U20CE505 & Geotechnical Engineering-II(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE505 & Geotechnical Engineering-II(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1F0KlUamd89EmGJGmEkqI9-P8mn7neN34/view?usp=sharing"
  },
  {
    "subject_name": "PATHOLOGY AND MICROBIOLOGY",
    "year": 2020,
    "title": "U20BM302 - PATHOLOGY AND MICROBIOLOGY(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM302 - PATHOLOGY AND MICROBIOLOGY(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1Fh9A_ncRCiy3zhrCaexIfquqPjRbhVrp/view?usp=sharing"
  },
  {
    "subject_name": "Air Breathing Propulsion",
    "year": 2020,
    "title": "U20AE405 - Air Breathing Propulsion (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AE405 - Air Breathing Propulsion (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1G7CpbApJG1jy8cTaCb2nsaj_u7JlDRTo/view?usp=sharing"
  },
  {
    "subject_name": "ADVANCED BIOMEDICAL INSTRUMENTATION",
    "year": 2020,
    "title": "U20BM602 & ADVANCED BIOMEDICAL INSTRUMENTATION (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM602 & ADVANCED BIOMEDICAL INSTRUMENTATION (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1Hfe-6vWAi-fCbxc1nfMM0dGDgI0WS59a/view?usp=sharing"
  },
  {
    "subject_name": "Avionics",
    "year": 2020,
    "title": "U20AE701 - Avionics(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AE701 - Avionics(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1Hi4JRqTVKjO0D4LniMrlMnI7cf_g5Nzf/view?usp=sharing"
  },
  {
    "subject_name": "Medical Equipment Maintenance and Troubleshooting",
    "year": 2020,
    "title": "U20BM703 _ Medical Equipment Maintenance and Troubleshooting(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM703 _ Medical Equipment Maintenance and Troubleshooting(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1I5bLLURVnMU78KsaOzRYgwNRp9MOPz4z/view?usp=sharing"
  },
  {
    "subject_name": "INTERNET OF THINGS AND ITS APPLICATIONS",
    "year": 2020,
    "title": "U20AG731 - INTERNET OF THINGS AND ITS APPLICATIONS(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AG731 - INTERNET OF THINGS AND ITS APPLICATIONS(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1I8Ha4fSZYhTK6YLIuP31vMfxC5YCsB7n/view?usp=sharing"
  },
  {
    "subject_name": "Municipal Waste Water Engineering",
    "year": 2020,
    "title": "U20CE601 - Municipal Waste Water Engineering (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE601 - Municipal Waste Water Engineering (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1Ii423zNv0oCvbjs97Zr84SBHcV826edq/view?usp=sharing"
  },
  {
    "subject_name": "Natural Language Processing",
    "year": 2020,
    "title": "U20AI703 - Natural Language Processing(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AI703 - Natural Language Processing(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1Ijusw2a9v8H9lt9UcgJn0uKroUpIgaZC/view?usp=sharing"
  },
  {
    "subject_name": "Spacecraft Dynamics",
    "year": 2020,
    "title": "U20AS601 - Spacecraft Dynamics (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AS601 - Spacecraft Dynamics (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1Ke7pa_7rLN2GnkUAulYZCX0lvlQ4ysKE/view?usp=sharing"
  },
  {
    "subject_name": "Medical Ethics and Standards",
    "year": 2020,
    "title": "U20BM710 Medical Ethics and Standards(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM710 Medical Ethics and Standards(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1MGaGWXUGp5R0uT1UL4Qw1GgrKWh8WyKb/view?usp=sharing"
  },
  {
    "subject_name": "Digital Integrated Circuits",
    "year": 2020,
    "title": "U20BM402 - Digital Integrated Circuits (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM402 - Digital Integrated Circuits (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1MbL9pn_6M94HG6DMNniRo6nY8_Hgyn1W/view?usp=sharing"
  },
  {
    "subject_name": "Structural Analysis",
    "year": 2020,
    "title": "U20CE501 _ Structural Analysis(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE501 _ Structural Analysis(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1Mnw6BIjA4fDLI-UJ-2YlMAlXF6aXjx50/view?usp=sharing"
  },
  {
    "subject_name": "Transportation Engineering-II",
    "year": 2020,
    "title": "U20CE504 –Transportation Engineering-II(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE504 –Transportation Engineering-II(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1Mp4NMFwcaMIlmY2ScaL2eKcDjbirskaf/view?usp=sharing"
  },
  {
    "subject_name": "Genetic Engineering",
    "year": 2020,
    "title": "U20BT502  Genetic Engineering(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BT502  Genetic Engineering(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1N0oItnkN9Yy5jZgRk7ZfwQ1aNMppSoxT/view?usp=sharing"
  }
];
// --- 2. SEARCH FUNCTIONALITY ---
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const analysisSection = document.getElementById('analysis-section');
// Get the new suggestions container
const suggestionsContainer = document.getElementById('suggestionsContainer');
let currentResults = [];

function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    resultsContainer.innerHTML = '';
    analysisSection.innerHTML = '';
    currentResults = [];
    // Clear suggestions when a full search is performed
    suggestionsContainer.innerHTML = ''; 
    if (!query) { return; }
    
    currentResults = questionPapers.filter(paper => paper.subject.toLowerCase().includes(query));
    if (currentResults.length > 0) {
        if (currentResults.length >= 99999999) {
            const analyseBtn = document.createElement('button');
            analyseBtn.className = 'analysis-btn';
            analyseBtn.innerText = '📊 Analyse Topics';
            analyseBtn.id = 'analyseTopicsBtn';
            analysisSection.appendChild(analyseBtn);
        }
        currentResults.forEach(paper => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <div>
                    <strong>${paper.title}</strong>
                    <p>Subject: ${paper.subject} | Year: ${paper.year}</p>
                </div>
                <div class="button-group">
                    <button class="view-button" data-url="${paper.viewUrl}" data-title="${paper.title}" data-download="${paper.downloadUrl}">View</button>
                    <a href="${paper.downloadUrl}" class="download-button" download>Download</a>
                </div>
            `;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>No papers found.</p>';
    }
}

// New function to show live suggestions
function showSuggestions() {
    const query = searchInput.value.toLowerCase().trim();
    suggestionsContainer.innerHTML = ''; // Clear old suggestions
    if (!query) {
        return; // Exit if the search box is empty
    }

    // Get a unique list of subjects from the database
    const uniqueSubjects = [...new Set(questionPapers.map(paper => paper.subject))];
    const filteredSubjects = uniqueSubjects.filter(subject => subject.toLowerCase().includes(query));

    if (filteredSubjects.length > 0) {
        filteredSubjects.forEach(subject => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.textContent = subject;
            suggestionItem.addEventListener('click', () => {
                searchInput.value = subject;
                suggestionsContainer.innerHTML = ''; // Hide suggestions after selection
                performSearch(); // Immediately perform the search for the selected subject
            });
            suggestionsContainer.appendChild(suggestionItem);
        });
    }
}

// Event listeners for the search functionality
searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
});

// Add the new event listener for live suggestions
searchInput.addEventListener('input', showSuggestions);

// Optional: Hide suggestions when clicking anywhere else on the page
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-section')) {
        suggestionsContainer.innerHTML = '';
    }
});


// --- 3. MODAL FUNCTIONALITY ---
const allModals = document.querySelectorAll('.modal');
const pdfViewerModal = document.getElementById('pdfViewerModal');
const pdfIframe = document.getElementById('pdf-iframe');
const pdfTitle = document.getElementById('pdf-title');
const downloadPdfBtn = document.getElementById('downloadPdfBtn');
const closeViewerBtn = document.getElementById('closeViewerBtn');

function openModal(modal) { modal.style.display = "block"; }
function closeAllModals() { allModals.forEach(m => m.style.display = "none"); }

document.getElementById("contactBtn").onclick = () => openModal(document.getElementById("contactModal"));
document.getElementById("foundersBtn").onclick = () => openModal(document.getElementById("foundersModal"));
document.getElementById("helpBtn").onclick = () => openModal(document.getElementById("helpModal"));
document.getElementById("aboutCollegeBtn").onclick = () => openModal(document.getElementById("aboutCollegeModal"));
document.querySelectorAll('.modal .close-btn').forEach(btn => { btn.onclick = closeAllModals; });

document.addEventListener('click', e => {
    if (e.target && e.target.id === 'analyseTopicsBtn') {
        const allTopics = currentResults.flatMap(paper => paper.topics || []);
        const topicCounts = allTopics.reduce((acc, topic) => { acc[topic] = (acc[topic] || 0) + 1; return acc; }, {});
        const sortedTopics = Object.entries(topicCounts).sort(([,a],[,b]) => b-a);
        let reportHTML = '<ul>' + sortedTopics.map(([topic, count]) => `<li>${topic} <span>Appeared in ${count} paper(s)</span></li>`).join('') + '</ul>';
        document.getElementById("analysisReportContainer").innerHTML = reportHTML;
        openModal(document.getElementById("analysisModal"));
    }
});
document.addEventListener('click', e => {
    if (e.target && e.target.classList.contains('view-button')) {
        // Get the direct Google Drive URL from the data-url attribute
        const url = e.target.getAttribute('data-url');
        
        // Open the URL in a new tab, allowing users to use Google Drive's native features
        window.open(url, '_blank');
    }
});
closeViewerBtn.onclick = () => {
    pdfViewerModal.style.display = 'none';
    pdfIframe.src = '';
};




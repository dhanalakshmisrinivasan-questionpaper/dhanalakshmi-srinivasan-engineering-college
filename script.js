// --- 1. DATABASE OF PAPERS ---
// CORRECTED: Flattened the nested array to ensure a single, valid data structure.
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
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmisrinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AI401 , U20CS404 & U20IT403 - Computer Networks (Q).pdf",
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
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmisrinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AI302 - Computer Architecture and Organization(Q).pdf",
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
  },
  {
    "subject_name": "Compressible Flow",
    "year": 2020,
    "title": "U20AS501 – Compressible Flow(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AS501 – Compressible Flow(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1Oa4GAevIgCqah6V-zSErhMstX-Kah2qP/view?usp=sharing"
  },
  {
    "subject_name": "Biomaterials",
    "year": 2020,
    "title": "U20BM510 & Biomaterials(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM510 & Biomaterials(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1P9inR6aAXTR0cZjRhvpoMWTjysugAH_V/view?usp=sharing"
  },
  {
    "subject_name": "FLUIDS MECHANICS",
    "year": 2020,
    "title": "U20CE302_ FLUIDS MECHANICS (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE302_ FLUIDS MECHANICS (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1PR8pXTMHmIZHcloAgYZ1sixuFQoRBJR-/view?usp=sharing"
  },
  {
    "subject_name": "PROCESS EQUIPMENT DESIGN FOR CHEMICAL ENGINEERS",
    "year": 2020,
    "title": "U20CH703 PROCESS EQUIPMENT DESIGN FOR CHEMICAL ENGINEERS(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CH703 PROCESS EQUIPMENT DESIGN FOR CHEMICAL ENGINEERS(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1QlqeHknaSk835iMRFV5Bymj7k1RrOeZP/view?usp=sharing"
  },
  {
    "subject_name": "Estimating Costing and Valuation Engineering",
    "year": 2020,
    "title": "U20CE701 – Estimating Costing and Valuation Engineering(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE701 – Estimating Costing and Valuation Engineering(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1QqCjLVIjiZQwFVOHtDh4Z-4UAEHJg-gT/view?usp=sharing"
  },
  {
    "subject_name": "CHEMICAL PROCESS ENGINEERING ECONOMICS",
    "year": 2020,
    "title": "U20CH702 _ CHEMICAL PROCESS ENGINEERING ECONOMICS (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CH702 _ CHEMICAL PROCESS ENGINEERING ECONOMICS (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1Qw2VVQzrCnkcz5V4LH8F4dyt4-6Aymyy/view?usp=sharing"
  },
  {
    "subject_name": "Public Water Supply System & Treatment",
    "year": 2020,
    "title": "U20CE502 – Public Water Supply System & Treatment (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE502 – Public Water Supply System & Treatment (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1RwbuBMXLkhj6p1DF9cQLO_Y5fElcRXoO/view?usp=sharing"
  },
  {
    "subject_name": "Composite Materials and Structures",
    "year": 2020,
    "title": "U20AS732 Composite Materials and Structures(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AS732 Composite Materials and Structures(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1SUnwWidBD1QrXaRZSa8dVyDPtV8iyaQe/view?usp=sharing"
  },
  {
    "subject_name": "DATAWAREHOUSING AND DATA MINING",
    "year": 2020,
    "title": "U20AI601 - DATAWAREHOUSING AND DATA MINING (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AI601 - DATAWAREHOUSING AND DATA MINING (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1Sh91o4SjZqmldaZev_FqfEuHQpyMx6sE/view?usp=sharing"
  },
  {
    "subject_name": "Mechanics of Machines",
    "year": 2020,
    "title": "U20AS302 - Mechanics of Machines(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AS302 - Mechanics of Machines(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1UtduBMklHlY1jr8ZpFJaVVgrdvfeaRxY/view?usp=sharing"
  },
  {
    "subject_name": "Bioelectric Physiology and Chemical Analysis",
    "year": 2020,
    "title": "U20BM404 - Bioelectric Physiology and Chemical Analysis (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM404 - Bioelectric Physiology and Chemical Analysis (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1V2S9BiVhXBSQamticd6hwHo7nDgcVSUa/view?usp=sharing"
  },
  {
    "subject_name": "Medical Physics",
    "year": 2020,
    "title": "U20BM403 - Medical Physics (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM403 - Medical Physics (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1X4eiraf2HiFcZefp9DB2KehWf2o5QP7v/view?usp=sharing"
  },
  {
    "subject_name": "MEDICAL IMAGE PROCESSING",
    "year": 2020,
    "title": "U20BM604 MEDICAL IMAGE PROCESSING(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM604 MEDICAL IMAGE PROCESSING(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1XqPHE0D9RdUUJ079ISJ49AZwt1GvJEQT/view?usp=sharing"
  },
  {
    "subject_name": "Instrumental Method of Chemical Analysis",
    "year": 2020,
    "title": "U20CH501 _ Instrumental Method of Chemical Analysis(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CH501 _ Instrumental Method of Chemical Analysis(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1YTgJp2-nzLFUk62qOrNpchaKg6i8fdsu/view?usp=sharing"
  },
  {
    "subject_name": "Water Resources Engineering",
    "year": 2020,
    "title": "U20CE702 Water Resources Engineering (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE702 Water Resources Engineering (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1ZGWM4-nZqgaZKrs32yVKGUSFBDY3RYtA/view?usp=sharing"
  },
  {
    "subject_name": "Process Heat Transfer",
    "year": 2020,
    "title": "U20CH504 – Process Heat Transfer(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CH504 – Process Heat Transfer(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1ZXWqvP0xCj_jEOtZrbf4S_8MVdZSvR22/view?usp=sharing"
  },
  {
    "subject_name": "Cryptography and Network Security",
    "year": 2020,
    "title": "CS8792 - Cryptography and Network Security(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/CS8792 - Cryptography and Network Security(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1_lZ2g67Eml0QXF6s751-RxSqB2Vljwys/view?usp=sharing"
  },
  {
    "subject_name": "Computer Applications in Design",
    "year": 2020,
    "title": "P20CC101 - Computer Applications in Design(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/P20CC101 - Computer Applications in Design(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1_w3bm0KUwz0URGIY4HAyvGb25bFu965q/view?usp=sharing"
  },
  {
    "subject_name": "Strength of Materials - II",
    "year": 2020,
    "title": "U20CE402 - Strength of Materials - II (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE402 - Strength of Materials - II (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1aBwZOtK8zddtqPwN_xWM8uTp-tlAjBu9/view?usp=sharing"
  },
  {
    "subject_name": "Bioprocess Principle",
    "year": 2020,
    "title": "U20BT401 - Bioprocess Principle (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BT401 - Bioprocess Principle (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1bGCFrzX8G5pj6Lo6Ec313mroKGeTU4yk/view?usp=sharing"
  },
  {
    "subject_name": "Software Engineering",
    "year": 2020,
    "title": "U20CS401 -Software Engineering (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CS401 -Software Engineering (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1bRttqI0EfIiJoDBG0nxeHe2k5UVfh8OD/view?usp=sharing"
  },
  {
    "subject_name": "Computational Fluid Dynamics for Aerospace Engineering",
    "year": 2020,
    "title": "U20AS702– Computational Fluid Dynamics for Aerospace Engineering(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmisrinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AS702– Computational Fluid Dynamics for Aerospace Engineering(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1crPuGaLhQYNy72mzHMT2uM3nP3ERWI0g/view?usp=sharing"
  },
  {
    "subject_name": "Heritage of Tamil",
    "year": 2020,
    "title": "GE3152  - Heritage of Tamil(Q) new.pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/GE3152  - Heritage of Tamil(Q) new.pdf",
    "view_url": "https://drive.google.com/file/d/1d7jlaSYQmrrkxSpVoYSG9CFWOrl197dv/view?usp=sharing"
  },
  {
    "subject_name": "REMOTE SENSING AND GIS APPLICATION",
    "year": 2020,
    "title": "U20CE621 - REMOTE SENSING AND GIS APPLICATION (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE621 - REMOTE SENSING AND GIS APPLICATION (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1e8XdymgKPJusFQ7FE2U6clVSHBoAYvxk/view?usp=sharing"
  },
  {
    "subject_name": "Transport Phenomena",
    "year": 2020,
    "title": "U20CH701 Transport Phenomena(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CH701 Transport Phenomena(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1eZNqCBsb2Xo-gUA93XSi8tgpRkn8W4LQ/view?usp=sharing"
  },
  {
    "subject_name": "Heat and Mass Transfer Operations",
    "year": 2020,
    "title": "U20BT504 – Heat and Mass Transfer Operations(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BT504 – Heat and Mass Transfer Operations(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1erGiyRUzPlNWFq5zKRZhLQUJKyifSeiH/view?usp=sharing"
  },
  {
    "subject_name": "Municipal Solid Waste Management",
    "year": 2020,
    "title": "U20CE741 Municipal Solid Waste Management(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE741 Municipal Solid Waste Management(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1fBKsenvvQMkV86ZKsGUlLEUyTawPr6-U/view?usp=sharing"
  },
  {
    "subject_name": "HYPERSONIC AERODYNAMICS FOR AEROSPACE VEHICLES",
    "year": 2020,
    "title": "U20AS701- HYPERSONIC AERODYNAMICS FOR AEROSPACE VEHICLES(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AS701- HYPERSONIC AERODYNAMICS FOR AEROSPACE VEHICLES(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1fCSp2WmJznzMA3mmmiqf0US8RLo9Yfae/view?usp=sharing"
  },
  {
    "subject_name": "Design and Analysis of Algorithm",
    "year": 2020,
    "title": "U20AI402 & U20CS402 - Design and Analysis of Algorithm (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AI402 & U20CS402 - Design and Analysis of Algorithm (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1fjXESPEF-WP4cVPSXd_51tu6vgI9kZ0d/view?usp=sharing"
  },
  {
    "subject_name": "Fruits and Vegetables Processing",
    "year": 2020,
    "title": "U20AG724 - Fruits and Vegetables Processing(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AG724 - Fruits and Vegetables Processing(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1fkq4J7boyvbv87u_KQ48sbzfGHjxz_nO/view?usp=sharing"
  },
  {
    "subject_name": "Fundamentals of Aerospace control Engineering",
    "year": 2020,
    "title": "U20AS504 _ Fundamentals of Aerospace control Engineering(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AS504 _ Fundamentals of Aerospace control Engineering(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1fxaIfk0kPF4-uYDuw4rWRzmEW4g71AuM/view?usp=sharing"
  },
  {
    "subject_name": "Experimental Stress Analysis",
    "year": 2020,
    "title": "U20AS613 - Experimental Stress Analysis (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AS613 - Experimental Stress Analysis (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1g5qnbHMirj844lo9effA0HSKNXQHuolo/view?usp=sharing"
  },
  {
    "subject_name": "AI Knowledge Representation and Reasoning",
    "year": 2020,
    "title": "U20AI602 - AI Knowledge Representation and Reasoning (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AI602 - AI Knowledge Representation and Reasoning (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1zZpI9rFDgcUuABep0Ws4WnHGKmJt7bDB/view?usp=sharing"
  },
  {
    "subject_name": "ANATOMY AND HUMAN PHYSIOLOGY",
    "year": 2020,
    "title": "U20BM304 - ANATOMY AND HUMAN PHYSIOLOGY(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM304 - ANATOMY AND HUMAN PHYSIOLOGY(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1wsOZRN4T3ajjOEAXEH13MrjD1wwclWei/view?usp=sharing"
  },
  {
    "subject_name": "Aerospace Structural Mechanics",
    "year": 2020,
    "title": "U20AS503-Aerospace Structural Mechanics(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AS503-Aerospace Structural Mechanics(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1lV0F0rlxCU6g0t2RHGBxujFszQE_NKpv/view?usp=sharing"
  },
  {
    "subject_name": "ARTIFICIAL INTELLIGENCE IN HEALTHCARE",
    "year": 2020,
    "title": "U20BM702 _ ARTIFICIAL INTELLIGENCE IN HEALTHCARE(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM702 _ ARTIFICIAL INTELLIGENCE IN HEALTHCARE(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1oYp77p1JhnwCL6y3s1ae-AIVRiypP6e4/view?usp=sharing"
  },
  {
    "subject_name": "BIO CONTROL SYSTEMS",
    "year": 2020,
    "title": "U20BM601 & BIO CONTROL SYSTEMS (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM601 & BIO CONTROL SYSTEMS (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1hiCGyNZuzvrSU4NFSQ4IfYZ2aVXiz72M/view?usp=sharing"
  },
  {
    "subject_name": "BIO SIGNAL PROCESSING",
    "year": 2020,
    "title": "U20BM501 BIO SIGNAL PROCESSING(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM501 BIO SIGNAL PROCESSING(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1p2EPXmX1vHOKrAga74y0CI68WKTDqffW/view?usp=sharing"
  },
  {
    "subject_name": "CHEMICAL REACTION ENGINEERING -I",
    "year": 2020,
    "title": "U20CH502-CHEMICAL REACTION ENGINEERING -I(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CH502-CHEMICAL REACTION ENGINEERING -I(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1hBBPJJ8aM9G5sDLs9xi9R5poPk7YD2C5/view?usp=sharing"
  },
  {
    "subject_name": "CLINICAL MANAGEMENT",
    "year": 2020,
    "title": "U20BM504 – CLINICAL MANAGEMENT(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM504 – CLINICAL MANAGEMENT(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1k4TcTt0UNUp5lNLirET_8D_zrZDKd0b1/view?usp=sharing"
  },
  {
    "subject_name": "Concrete Technology",
    "year": 2020,
    "title": "U20CE405 - Concrete Technology (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE405 - Concrete Technology (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1xCJwvuDRyanxud3WfCwWoYUUm4dtgfmZ/view?usp=sharing"
  },
  {
    "subject_name": "DESIGN OF RC ELEMENTS",
    "year": 2020,
    "title": "U20CE503 – DESIGN OF RC ELEMENTS(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE503 – DESIGN OF RC ELEMENTS(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1qWdDfidJRo9GTfIXl1t6Qm0m_MYYXhNX/view?usp=sharing"
  },
  {
    "subject_name": "Database Management Systems",
    "year": 2020,
    "title": "U20AI301 – Database Management Systems(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AI301 – Database Management Systems(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1p395YxQeGnG0qJBwuS4jd5syo5M-sUfk/view?usp=sharing"
  },
  {
    "subject_name": "Digital Image Processing",
    "year": 2020,
    "title": "U20AI404 - Digital Image Processing (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AI404 - Digital Image Processing (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1kISDu0NcHoD2EVmcwjsRNwxXsIyrwkcb/view?usp=sharing"
  },
  {
    "subject_name": "Disaster Management",
    "year": 2020,
    "title": "U20CE735 _ Disaster Management(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE735 _ Disaster Management(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1vkGTWWDWxTeuMMmYqPMkZul8JW2H2ie7/view?usp=sharing"
  },
  {
    "subject_name": "Flight Systems and Instrumentation",
    "year": 2020,
    "title": "U20AS603 - Flight Systems and Instrumentation (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AS603 - Flight Systems and Instrumentation (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1wbQFyJ8iGlf__1c7UD2kP0NurdsPukOs/view?usp=sharing"
  },
  {
    "subject_name": "Food and Dairy Engineering",
    "year": 2020,
    "title": "U20AG604 - Food and Dairy Engineering (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AG604 - Food and Dairy Engineering (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1gLAuhQw-gF7NgCTCdWKlDFnR24ZbftlE/view?usp=sharing"
  },
  {
    "subject_name": "Green Computing",
    "year": 2020,
    "title": "U20AI733 - Green Computing(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AI733 - Green Computing(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1i8MLMQLVInR6WBKFhw-gNrKCktXcUfnW/view?usp=sharing"
  },
  {
    "subject_name": "Mechanics of Solids for Chemical Engineers",
    "year": 2020,
    "title": "U20CH302 - Mechanics of Solids for Chemical Engineers(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CH302 - Mechanics of Solids for Chemical Engineers(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1jjJam8mSmlU6dpOtOHtCQlI4PbTm9ax3/view?usp=sharing"
  },
  {
    "subject_name": "Molecular Biology",
    "year": 2020,
    "title": "U20BT403 - Molecular Biology (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BT403 - Molecular Biology (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1rIhrQrcPBI2KPMD4rZXY56ZJD05hdUMd/view?usp=sharing"
  },
  {
    "subject_name": "Object Oriented Programming",
    "year": 2020,
    "title": "U20AI303 – Object Oriented Programming(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmisrinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AI303 – Object Oriented Programming(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1pEZSXvqxRTNuC3r338rQiXe8j8Y_uRVT/view?usp=sharing"
  },
  {
    "subject_name": "Object Oriented Programming",
    "year": 2020,
    "title": "U20CS303 U20IT302 _ Object Oriented Programming(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmisrinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CS303 U20IT302 Object Oriented Programming (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1y5lt_yxHaoeRPnaF3n7-kuDN-lZAVNOk/view?usp=sharing"
  },
  {
    "subject_name": "Protected Cultivation",
    "year": 2020,
    "title": "U20AG612 - Protected Cultivation (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AG612 - Protected Cultivation (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1vCnYie3-iqtNg8N_mH5JYcx4pejW1GUk/view?usp=sharing"
  },
  {
    "subject_name": "Rehabilitation Engineering",
    "year": 2020,
    "title": "U20BM608 & Rehabilitation Engineering (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM608 & Rehabilitation Engineering (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1ySG6faEt2L10ewQ_Bt4WJU99m6rTA7G7/view?usp=sharing"
  },
  {
    "subject_name": "SIGNALS AND SYSTEMS",
    "year": 2020,
    "title": "U20BM303 _ SIGNALS AND SYSTEMS (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM303 _ SIGNALS AND SYSTEMS (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1mb8Nn3yNrJVaJzA9uZd3RvLKFVrpcwfI/view?usp=sharing"
  },
  {
    "subject_name": "Sensors and Transducers",
    "year": 2020,
    "title": "U20BM301– Sensors and Transducers (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20BM301– Sensors and Transducers (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1wCLtSu5CFVU1v_onKsH1TjktbY8S8b7Q/view?usp=sharing"
  },
  {
    "subject_name": "Software Engineering",
    "year": 2020,
    "title": "U20AI503 - Software Engineering (Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmisrinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20AI503 - Software Engineering (Q).pdf",
    "view_url": "https://drive.google.com/file/d/1ko1NK9qRe8rbYEYt0j_WrX-7OakLtZNu/view?usp=sharing"
  },
  {
    "subject_name": "Strength of Materials- I",
    "year": 2020,
    "title": "U20CE301– Strength of Materials- I(Q).pdf",
    "download_url": "https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/abbae616aef49dfd9a68038d002a88eb13d638be/U20CE301– Strength of Materials- I(Q).pdf",
    "view_url": "https://drive.google.com/file/d/1yvb7mf4-MVodengZTOo6c0w_EpLRWkag/view?usp=sharing"
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
        if (currentResults.length >= 99999999) { // Note: This number is very high, might never be true
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

    // Get a unique list of subjects from the database (assuming 'questionPapers' exists)
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

function openModal(modal) { if (modal) modal.style.display = "block"; }
function closeAllModals() { allModals.forEach(m => m.style.display = "none"); }

document.getElementById("contactBtn").onclick = () => openModal(document.getElementById("contactModal"));
document.getElementById("foundersBtn").onclick = () => openModal(document.getElementById("foundersModal"));
document.getElementById("helpBtn").onclick = () => openModal(document.getElementById("helpModal"));
// --- THIS IS THE FIX ---
document.getElementById("aboutCollegeBtn").onclick = () => openModal(document.getElementById("aboutCollegeModal"));
// -----------------------

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

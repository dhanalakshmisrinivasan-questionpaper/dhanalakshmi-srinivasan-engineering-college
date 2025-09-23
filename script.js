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
  },
  {
    subject: 'Fluid Mechanics and Machinery',
    year: '2024',
    title: 'CE8394 - Fluid Mechanics and Machinery(Q)',
    viewUrl: 'https://drive.google.com/file/d/1Vf-XVTU8Mqt7HcrvZg9JOzORO6UqQtVs/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/CE8394%20-%20Fluid%20Mechanics%20and%20Machinery(Q).pdf',
  },
  {
    subject: 'Design of Steel Structural Elements',
    year: '2024',
    title: 'CE8601- Design of Steel Structural Elements(Q)',
    viewUrl: 'https://drive.google.com/file/d/108FMUzwpQNo9rZxZxFFC62Q855Ei2405/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/CE8601-%20Design%20of%20Steel%20Structural%20Elements(Q).pdf',
  },
  {
    subject: 'Structural Analysis II',
    year: '2024',
    title: 'CE8602 - Structural Analysis II(Q)',
    viewUrl: 'https://drive.google.com/file/d/1bCL3GpGMAGiCBDTzVYZhQCz2UErqzyZs/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/CE8602%20-%20Structural%20Analysis%20II(Q).pdf',
  },
  {
    subject: 'Cyber Forensics',
    year: '2024',
    title: 'CS8074 - Cyber Forensics(Q)',
    viewUrl: 'https://drive.google.com/file/d/1f7W86BO6GbraGHIvIg4HqkL3bUyJ_FWD/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/CS8074%20-%20Cyber%20Forensics(Q).pdf',
  },
  {
    subject: 'Information Retrieval Techniques',
    year: '2024',
    title: 'CS8080 - Information Retrieval Techniques(Q)',
    viewUrl: 'https://drive.google.com/file/d/119le-VqoKudI6U8DugOn2icya6RiKU_L/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/CS8080%20-%20Information%20Retrieval%20Techniques(Q).pdf',
  },
  {
    subject: 'Internet of Things',
    year: '2024',
    title: 'CS8081 – Internet of Things(Q)',
    viewUrl: 'https://drive.google.com/file/d/1srnt5CKORzxOGHQOp6zqRcjo3VTPrqg3/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/CS8081%20%E2%80%93%20Internet%20of%20Things(Q).pdf',
  },
  {
    subject: 'Cryptography and Network Security',
    year: '2024',
    title: 'CS8792 - Cryptography and Network Security(Q)',
    viewUrl: 'https://drive.google.com/file/d/12nM7HYTqbeziKWi-MxJPSB2-1MnUdOD8/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/CS8792%20-%20Cryptography%20and%20Network%20Security(Q).pdf',
  },
  {
    subject: 'Wireless Networks',
    year: '2024',
    title: 'EC8004 - Wireless Networks(Q)',
    viewUrl: 'https://drive.google.com/file/d/1I3bJ5dOQ_Zt3f-V5mBq4c8c1xV5l-e4X/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/EC8004%20-%20Wireless%20Networks(Q).pdf',
  },
  {
    subject: 'ELECTROMAGNETIC INTERFERENCE AND COMPATIBILITY',
    year: '2024',
    title: 'EC8072 - ELECTROMAGNETIC INTERFERENCE AND COMPATIBILITY(Q)',
    viewUrl: 'https://drive.google.com/file/d/1nNrxwui33Wp9Ii6JMerqGlVNwQN5xZOo/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/EC8072%20-%20ELECTROMAGNETIC%20INTERFERENCE%20AND%20COMPATIBILITY(Q).pdf',
  },
  {
    subject: 'Satellite Communication',
    year: '2024',
    title: 'EC8094 - Satellite Communication(Q)',
    viewUrl: 'https://drive.google.com/file/d/1ezvRa3Zf2zV0XvrR5afrbM3GjSF83yuo/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/EC8094%20-%20Satellite%20Communication(Q).pdf',
  },
  {
    subject: 'ELECTRON DEVICES AND CIRCUITS',
    year: '2024',
    title: 'EC8353 – ELECTRON DEVICES AND CIRCUITS(Q)',
    viewUrl: 'https://drive.google.com/file/d/1GPsX-_NVmQRYX0e2CtTcGfhOM9ZObAeG/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/EC8353%20%E2%80%93%20ELECTRON%20DEVICES%20AND%20CIRCUITS(Q).pdf',
  },
  {
    subject: 'Analog and Digital Communication',
    year: '2024',
    title: 'EC8394 _ Analog and Digital Communication (Q)',
    viewUrl: 'https://drive.google.com/file/d/1BHI6ncig5tb-udd2sEKQhILdLeIAOb1x/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/EC8394%20_%20Analog%20and%20Digital%20Communication%20(Q).pdf',
  },
  {
    subject: 'Transmission Lines and RF Systems',
    year: '2024',
    title: 'EC8651-Transmission Lines and RF Systems(Q)',
    viewUrl: 'https://drive.google.com/file/d/120bvV-CS8BahLd08s7N9spgaQS5uJ4tN/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/EC8651-Transmission%20Lines%20and%20RF%20Systems(Q).pdf',
  },
  {
    subject: 'Antennas and Microwave Engineering',
    year: '2024',
    title: 'EC8701 - Antennas and Microwave Engineering (Q)',
    viewUrl: 'https://drive.google.com/file/d/1nMbMGT44eY5BTYf9ffRJT84LLxl195fk/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/EC8701%20-%20Antennas%20and%20Microwave%20Engineering%20(Q).pdf',
  },
  {
    subject: 'EMBEDDED AND REAL TIME SYSTEMS',
    year: '2024',
    title: 'EC8791 - EMBEDDED AND REAL TIME SYSTEMS (Q)',
    viewUrl: 'https://drive.google.com/file/d/1TUn1osg7FpM7pYFaDA2DyvuT1RCpzUJD/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/EC8791%20-%20EMBEDDED%20AND%20REAL%20TIME%20SYSTEMS%20(Q).pdf',
  },
  {
    subject: 'DESIGN OF ELECTRICAL APPARATUS',
    year: '2024',
    title: 'EE8002 - DESIGN OF ELECTRICAL APPARATUS (Q)',
    viewUrl: 'https://drive.google.com/file/d/1EmIOXMeH162cSSqmP8Qv4-U6Idty0Z_z/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/EE8002%20-%20DESIGN%20OF%20ELECTRICAL%20APPARATUS%20(Q).pdf',
  },
  {
    subject: 'Electrical Machines - I',
    year: '2024',
    title: 'EE8301 - Electrical Machines - I(Q)',
    viewUrl: 'https://drive.google.com/file/d/1fVveiKVqOmLX5Zqk3syNQ6bQWasSYqpx/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/EE8301%20-%20Electrical%20Machines%20-%20I(Q).pdf',
  },
  {
    subject: 'Heritage of Tamil',
    year: '2024',
    title: 'GE3152  - Heritage of Tamil(Q) new',
    viewUrl: 'https://drive.google.com/file/d/1_djDiMTqxtEw5NHJcv7O_Xf6KZxejlFh/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/GE3152%20%20-%20Heritage%20of%20Tamil(Q)%20new.pdf',
  },
  {
    subject: 'Tamils and Technology',
    year: '2024',
    title: 'GE3252 - Tamils and Technology(Q)',
    viewUrl: 'https://drive.google.com/file/d/119dGvK9JvW6B1G2j4N8r4M9s0e0h8p9Q/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/GE3252%20-%20Tamils%20and%20Technology(Q).pdf',
  },
  {
    subject: 'Production Planning and Control',
    year: '2024',
    title: 'IE8693 – Production Planning and Control(Q)',
    viewUrl: 'https://drive.google.com/file/d/1zyB4cQYwABZb3Id2hOn3rbqpXZnsPuQJ/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/IE8693%20%E2%80%93%20Production%20Planning%20and%20Control(Q).pdf',
  },
  {
    subject: 'Computational Intelligence',
    year: '2024',
    title: 'IT8601- Computational Intelligence(Q)',
    viewUrl: 'https://drive.google.com/file/d/1pUXjZYGBrH1dV-dSDCpXhd0MwNtVdZ36/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/IT8601-%20Computational%20Intelligence(Q).pdf',
  },
  {
    subject: 'TRANSFORMS AND PARTIAL DIFFERENTIAL EQUATIONS',
    year: '2024',
    title: 'MA8353- TRANSFORMS AND PARTIAL DIFFERENTIAL EQUATIONS (Q)',
    viewUrl: 'https://drive.google.com/file/d/1L5aWitV94j8twGhlONCjIk-69gKLik_5/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/MA8353-%20TRANSFORMS%20AND%20PARTIAL%20DIFFERENTIAL%20EQUATIONS%20(Q).pdf',
  },
  {
    subject: 'Manufacturing Technology - I',
    year: '2024',
    title: 'ME8351 – Manufacturing Technology - I(Q)',
    viewUrl: 'https://drive.google.com/file/d/1yAwNOr-Pvb5Q6f6hTjx6L3jscwZzyEEG/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/ME8351%20%E2%80%93%20Manufacturing%20Technology%20-%20I(Q).pdf',
  },
  {
    subject: 'THERMAL ENGINEERING - II',
    year: '2024',
    title: 'ME859-THERMAL ENGINEERING - II(Q)',
    viewUrl: 'https://drive.google.com/file/d/12Y9shyuVmNnp7tA59QWrTNx9P2Ohk8Lh/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/ME859-THERMAL%20ENGINEERING%20-%20II(Q).pdf',
  },
  {
    subject: 'Heat and Mass Transfer',
    year: '2024',
    title: 'ME8693 - Heat and Mass Transfer(Q)',
    viewUrl: 'https://drive.google.com/file/d/1H2dcvvA0VpkgVjDwKQM9-TorJYuDcS8w/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/ME8693%20-%20Heat%20and%20Mass%20Transfer(Q).pdf',
  },
  {
    subject: 'Principles of Management',
    year: '2024',
    title: 'MG8591 Principles of Management(Q)',
    viewUrl: 'https://drive.google.com/file/d/1bVxIry8Dq3uVKoilX4hHQrZwhBAUNe4m/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/MG8591%20Principles%20of%20Management(Q).pdf',
  },
  {
    subject: 'Cryptography and Network Security',
    year: '2024',
    title: 'P20CAE11 – Cryptography and Network Security(Q)',
    viewUrl: 'https://drive.google.com/file/d/1JEtUfqKhtCXNYuezWWxspZHJzTDmHSP1/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P20CAE11%20%E2%80%93%20Cryptography%20and%20Network%20Security(Q).pdf',
  },
  {
    subject: 'Computer Applications in Design',
    year: '2024',
    title: 'P20CC101 - Computer Applications in Design(Q)',
    viewUrl: 'https://drive.google.com/file/d/16-qGGrg2P2ryZwrWNZAZz32W6_D8Omvt/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P20CC101%20-%20Computer%20Applications%20in%20Design(Q).pdf',
  },
  {
    subject: 'Advanced Strength of Materials',
    year: '2024',
    title: 'P20CC102 - Advanced Strength of Materials (Q)',
    viewUrl: 'https://drive.google.com/file/d/11Bq3GfF6o_r5s2h-X8gJ9p1K6qB3X_2v/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P20CC102%20-%20Advanced%20Strength%20of%20Materials%20(Q).pdf',
  },
  {
    subject: 'Research Methodology',
    year: '2024',
    title: 'P20CC264 – Research Methodology(Q)',
    viewUrl: 'https://drive.google.com/file/d/1gJfKrWSzK3Qn32Tjk0W0XSujpqwfkETs/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P20CC264%20%E2%80%93%20Research%20Methodology(Q).pdf',
  },
  {
    subject: 'Product Lifecycle Management',
    year: '2024',
    title: 'P20CC301 – Product Lifecycle Management(Q)',
    viewUrl: 'https://drive.google.com/file/d/1X7omVVOy6nwrJEflfFlq8LMXwhAw4PK3/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P20CC301%20%E2%80%93%20Product%20Lifecycle%20Management(Q).pdf',
  },
  {
    subject: 'Applied Material Engineering',
    year: '2024',
    title: 'P20CC324 - Applied Material Engineering(Q)',
    viewUrl: 'https://drive.google.com/file/d/1BjnixV7bpOQcBg9t0UupJkuAdIPx4FEm/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P20CC324%20-%20Applied%20Material%20Engineering(Q).pdf',
  },
  {
    subject: 'Applied Mathematics for Engineers',
    year: '2024',
    title: 'P20MA101 – Applied Mathematics for Engineers(Q)',
    viewUrl: 'https://drive.google.com/file/d/16DZWzubrDkrsxMJWQa0jKEzGMK8pLlxg/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P20MA101%20%E2%80%93%20Applied%20Mathematics%20for%20Engineers(Q).pdf',
  },
  {
    subject: 'Research Methodology and IPR',
    year: '2024',
    title: 'P23CAT33 - Research Methodology and IPR(Q)',
    viewUrl: 'https://drive.google.com/file/d/1S9xivrrIU8kZXp4n_zA2dSiBD6VdjnVS/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P23CAT33%20-%20Research%20Methodology%20and%20IPR(Q).pdf',
  },
  {
    subject: 'COMPETITIVE MANUFACTURING SYSTEMS',
    year: '2024',
    title: 'P23CCE45 – COMPETITIVE MANUFACTURING SYSTEMS(Q)',
    viewUrl: 'https://drive.google.com/file/d/1sAkpwnNC65LfzN-bFiFt39b1DDcxgtw0/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P23CCE45%20%E2%80%93%20COMPETITIVE%20MANUFACTURING%20SYSTEMS(Q).pdf',
  },
  {
    subject: 'Industrial Safety Management',
    year: '2024',
    title: 'P23CCE54 - Industrial Safety Management(Q)',
    viewUrl: 'https://drive.google.com/file/d/1vQE1OM43qsnF_BQFSebzTgTjgQndik6E/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P23CCE54%20-%20Industrial%20Safety%20Management(Q).pdf',
  },
  {
    subject: 'ADVANCED MANUFACTURING PROCESS',
    year: '2024',
    title: 'P23CCT31 - ADVANCED MANUFACTURING PROCESS(Q)',
    viewUrl: 'https://drive.google.com/file/d/1L478uSIfRKFCidSvFWoMaMryJTgAvrCw/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P23CCT31%20-%20ADVANCED%20MANUFACTURING%20PROCESS(Q).pdf',
  },
  {
    subject: 'Digital Image Processing',
    year: '2024',
    title: 'P23CSE02 – Digital Image Processing(Q)',
    viewUrl: 'https://drive.google.com/file/d/1m4r0SCA9vhKSvJQHcmQGMbbmx2VzV87O/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P23CSE02%20%E2%80%93%20Digital%20Image%20Processing(Q).pdf',
  },
  {
    subject: 'Information Extraction and Information Retrieval',
    year: '2024',
    title: 'P23CSE09 - Information Extraction and Information Retrieval(Q)',
    viewUrl: 'https://drive.google.com/file/d/11Bq3GfF6o_r5s2h-X8gJ9p1K6qB3X_2v/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P23CSE09%20-%20Information%20Extraction%20and%20Information%20Retrieval(Q).pdf',
  },
  {
    subject: 'Computer Vision and Pattern Recognition',
    year: '2024',
    title: 'P23CSE13 - Computer Vision and Pattern Recognition(Q)',
    viewUrl: 'https://drive.google.com/file/d/1yO2ck71jBoRZWVyF8TOMCtFmtbvE1pAX/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P23CSE13%20-%20Computer%20Vision%20and%20Pattern%20Recognition(Q).pdf',
  },
  {
    subject: 'HIGH SPEED SWITCHING AND NETWORKING',
    year: '2024',
    title: 'P23CUO04 – HIGH SPEED SWITCHING AND NETWORKING(Q)',
    viewUrl: 'https://drive.google.com/file/d/1uJpsaP2gj3JzvU5b6jBwfS4JzjLTSdhN/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P23CUO04%20%E2%80%93%20HIGH%20SPEED%20SWITCHING%20AND%20NETWORKING(Q).pdf',
  },
  {
    subject: 'OPTICAL COMMUNICATION AND NETWORKING',
    year: '2024',
    title: 'P23CUT31 – OPTICAL COMMUNICATION AND NETWORKING(Q)',
    viewUrl: 'https://drive.google.com/file/d/1_STsd2qpE8beOAhrwZfCSePXWIiLY5C6/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P23CUT31%20%E2%80%93%20OPTICAL%20COMMUNICATION%20AND%20NETWORKING(Q).pdf',
  },
  {
    subject: 'ADVANCED ANTENNA DESIGN',
    year: '2024',
    title: 'P23CUVE34 - ADVANCED ANTENNA DESIGN(Q)',
    viewUrl: 'https://drive.google.com/file/d/1mtlhGHAtsWj3NBTkby8bNKyDDYTKBzfL/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P23CUVE34%20-%20ADVANCED%20ANTENNA%20DESIGN(Q).pdf',
  },
   {
    subject: 'NANO COMPOSITE MATERIALS',
    year: '2024',
    title: 'P23PEO26 – NANO COMPOSITE MATERIALS(Q)',
    viewUrl: 'https://drive.google.com/file/d/1z505iAjXhEPMPMmeV9Yaezsac2ORON0Q/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P23PEO26%20%E2%80%93%20NANO%20COMPOSITE%20MATERIALS(Q).pdf',
  },
  {
    subject: 'CRYPTOCURRENCY AND BLOCKCHAIN TECHNOLOGY',
    year: '2024',
    title: 'P23SCSE19 - CRYPTOCURRENCY AND BLOCKCHAIN TECHNOLOGY(Q)',
    viewUrl: 'https://drive.google.com/file/d/1nKjj9c4tJG4ohd5mBI0Gtq_jnpFmO0Dm/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/P23SCSE19%20-%20CRYPTOCURRENCY%20AND%20BLOCKCHAIN%20TECHNOLOGY(Q).pdf',
  },
  {
    subject: 'SOFTWARE ENGINEERING',
    year: '2024',
    title: 'PR0CA303 - SOFTWARE ENGINEERING(Q)',
    viewUrl: 'https://drive.google.com/file/d/16hlWZtNB-2lxW5nZDz1-WdFKovTCFzP2/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/PR0CA303%20-%20SOFTWARE%20ENGINEERING(Q).pdf',
  },
  {
    subject: 'OPERATING SYSTEM',
    year: '2024',
    title: 'U20A1403 - OPERATING SYSTEM (Q)',
    viewUrl: 'https://drive.google.com/file/d/13ug6xubKbQgvqKekC69lfsYf4hMV5yBz/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20A1403%20-%20OPERATING%20SYSTEM%20(Q).pdf',
  },
  {
    subject: 'Aero Engineering Thermodynamics',
    year: '2024',
    title: 'U20AE301 - Aero Engineering Thermodynamics(Q)',
    viewUrl: 'https://drive.google.com/file/d/11Bq3GfF6o_r5s2h-X8gJ9p1K6qB3X_2v/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE301%20-%20Aero%20Engineering%20Thermodynamics(Q).pdf',
  },
  {
    subject: 'Elements of Aeronautical Engineering',
    year: '2024',
    title: 'U20AE303 - Elements of Aeronautical Engineering (Q)',
    viewUrl: 'https://drive.google.com/file/d/1E8mtFOw5uZlaioW3qiri5Ggzqu1RwA1K/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE303%20-%20Elements%20of%20Aeronautical%20Engineering%20(Q).pdf',
  },
  {
    subject: 'Low Speed Aerodynamics',
    year: '2024',
    title: 'U20AE401 - Low Speed Aerodynamics (Q)',
    viewUrl: 'https://drive.google.com/file/d/1pAVCl_njIsJHcmoCffHePgw1ewpAsCWR/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE401%20-%20Low%20Speed%20Aerodynamics%20(Q).pdf',
  },
  {
    subject: 'Aircraft Systems and Instruments',
    year: '2024',
    title: 'U20AE402 - Aircraft Systems and Instruments (Q)',
    viewUrl: 'https://drive.google.com/file/d/13rcrLI5noSPawjPqI-DpRhMMkyt_gm5_/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE402%20-%20Aircraft%20Systems%20and%20Instruments%20(Q).pdf',
  },
  {
    subject: 'Mechanics of Machines',
    year: '2024',
    title: 'U20AE403 - Mechanics of Machines (Q)',
    viewUrl: 'https://drive.google.com/file/d/1YcT97qI8h8k_t_XZ-DAFVL8SZbmON81t/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE403%20-%20Mechanics%20of%20Machines%20(Q).pdf',
  },
  {
    subject: 'ADVANCED SOLID MECHANICS',
    year: '2024',
    title: 'U20AE404 - ADVANCED SOLID MECHANICS (Q)',
    viewUrl: 'https://drive.google.com/file/d/1Xpm7xFmk4f-8xA4XVAJv0hJ-peSP5jHK/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE404%20-%20ADVANCED%20SOLID%20MECHANICS%20(Q).pdf',
  },
  {
    subject: 'Air Breathing Propulsion',
    year: '2024',
    title: 'U20AE405 - Air Breathing Propulsion (Q)',
    viewUrl: 'https://drive.google.com/file/d/1jo7UUA37nsB3_Gt-RyObnul4Imm-pt-A/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE405%20-%20Air%20Breathing%20Propulsion%20(Q).pdf',
  },
  {
    subject: 'Flight Dynamics',
    year: '2024',
    title: 'U20AE501 - Flight Dynamics(Q)',
    viewUrl: 'https://drive.google.com/file/d/1bAa9PuUKJ9_d-FZWK9up6sYLi-XC_a9W/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE501%20-%20Flight%20Dynamics(Q).pdf',
  },
  {
    subject: 'AIRCRAFT STRUCTURES',
    year: '2024',
    title: 'U20AE502 - AIRCRAFT STRUCTURES (Q)',
    viewUrl: 'https://drive.google.com/file/d/1bAa9PuUKJ9_d-FZWK9up6sYLi-XC_a9W/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE502%20-%20AIRCRAFT%20STRUCTURES%20(Q).pdf',
  },
  {
    subject: 'HIGH SPEED AERODYNAMICS',
    year: '2024',
    title: 'U20AE503 – HIGH SPEED AERODYNAMICS(Q)',
    viewUrl: 'https://drive.google.com/file/d/1-66GSb5i226HopJYbWRrQ2yVBF6-E4Dd/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE503%20%E2%80%93%20HIGH%20SPEED%20AERODYNAMICS(Q).pdf',
  },
  {
    subject: 'Rocket Propulsion',
    year: '2024',
    title: 'U20AE504 - Rocket Propulsion(Q)',
    viewUrl: 'https://drive.google.com/file/d/11Bq3GfF6o_r5s2h-X8gJ9p1K6qB3X_2v/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE504%20-%20Rocket%20Propulsion(Q).pdf',
  },
   {
    subject: 'Fundamentals of Control Engineering',
    year: '2024',
    title: 'U20AE505 - Fundamentals of Control Engineering(Q)',
    viewUrl: 'https://drive.google.com/file/d/1oI5kkYmDCb29E06xkJM7Q8qq3g7zc1Hy/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE505%20-%20Fundamentals%20of%20Control%20Engineering(Q).pdf',
  },
  {
    subject: 'Finite Element Methods',
    year: '2024',
    title: 'U20AE601 - Finite Element Methods (Q)',
    viewUrl: 'https://drive.google.com/file/d/1XIltJ3Z9R9YbmEglC6JK0-eIhjyiniJu/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE601%20-%20Finite%20Element%20Methods%20(Q).pdf',
  },
  {
    subject: 'Vibration and Elements of Aeroelasticity',
    year: '2024',
    title: 'U20AE602 - Vibration and Elements of Aeroelasticity (Q)',
    viewUrl: 'https://drive.google.com/file/d/11Bq3GfF6o_r5s2h-X8gJ9p1K6qB3X_2v/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE602%20-%20Vibration%20and%20Elements%20of%20Aeroelasticity%20(Q).pdf',
  },
  {
    subject: 'Composite Materials and Structures',
    year: '2024',
    title: 'U20AE603 - Composite Materials and Structures (Q)',
    viewUrl: 'https://drive.google.com/file/d/1F_fp9DT7a4hdIeb3EDoedqSg1zu_bzfb/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE603%20-%20Composite%20Materials%20and%20Structures%20(Q).pdf',
  },
  {
    subject: 'Additive Manufacturing',
    year: '2024',
    title: 'U20AE614 - Additive Manufacturing (Q)',
    viewUrl: 'https://drive.google.com/file/d/1skxGLq2yzhVTGKLQhov02l4U9-h6LXI4/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE614%20-%20Additive%20Manufacturing%20(Q).pdf',
  },
  {
    subject: 'Avionics',
    year: '2024',
    title: 'U20AE701 - Avionics(Q)',
    viewUrl: 'https://drive.google.com/file/d/1DWk5fr7HVUOavc4Tq_VRnCVFVKZZ2sa3/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE701%20-%20Avionics(Q).pdf',
  },
  {
    subject: 'Computational Fluid Dynamics',
    year: '2024',
    title: 'U20AE702 - Computational Fluid Dynamics(Q)',
    viewUrl: 'https://drive.google.com/file/d/1qoaw7Nj_QW5KqhJ2KM_UUBAXoHDiUBuF/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE702%20-%20Computational%20Fluid%20Dynamics(Q).pdf',
  },
  {
    subject: 'Airworthiness and Flight Safety',
    year: '2024',
    title: 'U20AE715 - Airworthiness and Flight Safety (Q)',
    viewUrl: 'https://drive.google.com/file/d/1UXYhtGGX19cyqy1iyMf3DIJXTqcR35gt/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AE715%20-%20Airworthiness%20and%20Flight%20Safety%20(Q).pdf',
  },
  {
    subject: 'Principles and Practices of Crop Production',
    year: '2024',
    title: 'U20AG301 - Principles and Practices of Crop Production(Q)',
    viewUrl: 'https://drive.google.com/file/d/1KPqM1Ku6Zou8FIuMKHiNi_eyAOVZ2pui/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AG301%20-%20Principles%20and%20Practices%20of%20Crop%20Production(Q).pdf',
  },
  {
    subject: 'SOIL SCIENCE AND ENGINEERING',
    year: '2024',
    title: 'U20AG302 - SOIL SCIENCE AND ENGINEERING(Q)',
    viewUrl: 'https://drive.google.com/file/d/1DVv0WwtP8zRVIQRFmsDC1erdz3JhkGeB/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AG302%20-%20SOIL%20SCIENCE%20AND%20ENGINEERING(Q).pdf',
  },
  {
    subject: 'Engineering Surveying',
    year: '2024',
    title: 'U20AG306  - Engineering Surveying(Q)',
    viewUrl: 'https://drive.google.com/file/d/19Vvpb9CxHSKIRXymCPROeKMep9V3nCPp/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AG306%20%20-%20Engineering%20Surveying(Q).pdf',
  },
  {
    subject: 'Farm Tractor Systems',
    year: '2024',
    title: 'U20AG403 - Farm Tractor Systems (Q)',
    viewUrl: 'https://drive.google.com/file/d/11Bq3GfF6o_r5s2h-X8gJ9p1K6qB3X_2v/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AG403%20-%20Farm%20Tractor%20Systems%20(Q).pdf',
  },
  {
    subject: 'Hydrology and Watre Resources Engineering',
    year: '2024',
    title: 'U20AG404 - Hydrology and Watre Resources Engineering (Q)',
    viewUrl: 'https://drive.google.com/file/d/1fb7DIXyyXRjT--ON3rDRJBU-sTSOqrMK/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AG404%20-%20Hydrology%20and%20Watre%20Resources%20Engineering%20(Q).pdf',
  },
  {
    subject: 'STRENGTH OF MATERIALS',
    year: '2024',
    title: 'U20AG407 - STRENGTH OF MATERIALS',
    viewUrl: 'https://drive.google.com/file/d/1fcWgTgKzPf9-gBdP5fxtfXBcQHGr-3iP/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AG407%20-%20STRENGTH%20OF%20MATERIALS.pdf',
  },
  {
    subject: 'Theory of Machinery',
    year: '2024',
    title: 'U20AG501 - Theory of Machinery(Q)',
    viewUrl: 'https://drive.google.com/file/d/1SZ_k59D140yNS3THf-KdD7MJEcYpKniZ/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AG501%20-%20Theory%20of%20Machinery(Q).pdf',
  },
  {
    subject: 'UNIT OPERATIONS IN AGRICULTURAL PROCESSING',
    year: '2024',
    title: 'U20AG502 – UNIT OPERATIONS IN AGRICULTURAL PROCESSING(Q)',
    viewUrl: 'https://drive.google.com/file/d/1DtpyOw2CbAEkemUAO9cokFxDtRQ9VEff/view?usp=sharing',
    downloadUrl: 'https://raw.githubusercontent.com/dhanalakshmisrinivasan-questionpaper/dhanalakshmi-srinivasan-engineering-college/974d63ae15798e2de88cf155f5113a81d590eaba/U20AG502%20%E2%80%93%20UNIT%20OPERATIONS%20IN%20AGRICULTURAL%20PROCESSING(Q).pdf',
  }
];
// --- 2. SEARCH FUNCTIONALITY ---
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const analysisSection = document.getElementById('analysis-section');
const suggestionsContainer = document.getElementById('suggestionsContainer');
let currentResults = [];

function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    resultsContainer.innerHTML = '';
    analysisSection.innerHTML = '';
    currentResults = [];
    suggestionsContainer.innerHTML = ''; 
    if (!query) {
        return;
    }

    // FIX 1: Corrected property name to 'subject_name'
    currentResults = questionPapers.filter(paper => paper.subject_name.toLowerCase().includes(query));

    if (currentResults.length > 0) {
        // Removed the flawed "analyseTopicsBtn" logic
        currentResults.forEach(paper => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            
            // FIX 2: Corrected property names to use 'subject_name'
            resultItem.innerHTML = `
                <div>
                    <strong>${paper.title}</strong>
                    <p>Subject: ${paper.subject_name} | Year: ${paper.year}</p>
                </div>
                <div class="button-group">
                    <button class="view-button" data-url="${paper.view_url}">View</button>
                    <a href="${paper.download_url}" class="download-button" download>Download</a>
                </div>
            `;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>No papers found.</p>';
    }
}


function showSuggestions() {
    const query = searchInput.value.toLowerCase().trim();
    suggestionsContainer.innerHTML = ''; 
    if (!query) {
        return;
    } 
    // FIX 3: Corrected property name to 'subject_name'
    const uniqueSubjects = [...new Set(questionPapers.map(paper => paper.subject_name))];
    const filteredSubjects = uniqueSubjects.filter(subject => subject.toLowerCase().includes(query));

    if (filteredSubjects.length > 0) {
        filteredSubjects.forEach(subject => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.textContent = subject;
            suggestionItem.addEventListener('click', () => {
                searchInput.value = subject;
                suggestionsContainer.innerHTML = '';
                performSearch();
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





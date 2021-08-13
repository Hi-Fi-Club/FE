type TInterestData = {
  name: string;
  value: string;
  subCategories: {
    name: string;
    value: string;
  }[];
}[];

const intersetData: TInterestData = [
  {
    name: "programming",
    value: "프로그래밍",
    subCategories: [
      { name: "javascript", value: "JavaScript" },
      { name: "java", value: "Java" },
      { name: "react", value: "React" },
      { name: "flutter", value: "Flutter" },
      { name: "algorithm", value: "알고리즘" },
    ],
  },
  {
    name: "language",
    value: "언어 / 외국어",
    subCategories: [
      { name: "english", value: "영어" },
      { name: "german", value: "독일어" },
      { name: "french", value: "프랑스어" },
      { name: "russian", value: "러시아어" },
    ],
  },
];

export { intersetData };

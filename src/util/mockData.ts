type TInterestData = {
  id: number;
  name: string;
  value: string;
  subCategories: {
    id: number,
    name: string;
    value: string;
  }[];
}[];

const intersetData: TInterestData = [
  {
    id: 1,
    name: "programming",
    value: "프로그래밍",
  // subCategories: [],
    subCategories: [
      { id: 1, name: "javascript", value: "JavaScript" },
      { id: 2,  name: "java", value: "Java" },
      { id: 3,  name: "react", value: "React" },
      { id: 4,  name: "flutter", value: "Flutter" },
      { id: 5, name: "algorithm", value: "알고리즘" },
    ],
  },
  {
    id: 2,
    name: "language",
    value: "언어 / 외국어",
    // subCategories: [],
    subCategories: [
      { id: 1, name: "english", value: "영어" },
      { id: 2, name: "german", value: "독일어" },
      { id: 3, name: "french", value: "프랑스어" },
      { id: 4, name: "russian", value: "러시아어" },
    ],
  },
];

export { intersetData };

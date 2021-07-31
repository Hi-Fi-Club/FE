type TChildren =
  | React.ReactNode
  | React.ReactChild
  | React.ReactChild[]
  | React.ReactChildren
  | React.ReactChildren[]
  | NonNullable<React.ReactNode>
  | {};

type TFont =
  | "Nunito_Black"
  | "Nunito_ExtraBold"
  | "Nunito_Bold"
  | "Nunito_SemiBold"
  | "Nunito_Regular"
  | "Nunito_Light"
  | "Nunito_ExtraLight";

type TPage = "enter" | "login";

export type { TChildren, TFont, TPage };

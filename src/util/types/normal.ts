type TChildren =
  | React.ReactNode
  | React.ReactChild
  | React.ReactChild[]
  | React.ReactChildren
  | React.ReactChildren[]
  | NonNullable<React.ReactNode>
  | {};

export type { TChildren };

// Current prices, shown in the FAQ. The club updates them often, so this is
// the only place to change when they do.

export interface VisitorFee {
  label: string;
  amount: string;
}

export const VISITOR_FEES: VisitorFee[] = [
  { label: "Mayores", amount: "$9.000" },
  { label: "Menores", amount: "$5.000" },
  { label: "Autos", amount: "$3.000" },
  { label: "Motos", amount: "$2.000" },
];

export interface MembershipFee {
  category: string;
  signUp: string;
  monthly: string;
}

export const MEMBERSHIP_FEES: MembershipFee[] = [
  { category: "Grupo familiar pleno", signUp: "$95.000", monthly: "$47.500" },
  { category: "Grupo familiar básico", signUp: "$72.000", monthly: "$36.000" },
  { category: "Mayor (+18 años)", signUp: "$48.000", monthly: "$24.000" },
  { category: "Menor", signUp: "$27.000", monthly: "$13.500" },
  { category: "Jubilado con la mínima", signUp: "$27.000", monthly: "$13.500" },
];

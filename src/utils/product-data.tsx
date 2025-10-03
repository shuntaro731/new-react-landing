export interface ProductItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const productItems: ProductItem[] = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    description:
      "次世代のビジネスインテリジェンスを実現する分析プラットフォーム。リアルタイムデータ処理と予測分析により、ビジネスの意思決定を加速します。",
    image: "/src/assets/product/product1.png",
  },
  {
    id: 2,
    title: "Smart Automation System",
    description:
      "業務プロセスを自動化し、生産性を最大化するインテリジェントシステム。機械学習による最適化で、コスト削減と効率化を実現します。",
    image: "/src/assets/product/product2.jpeg",
  },
  {
    id: 3,
    title: "Predictive Maintenance Solution",
    description:
      "IoTセンサーとAIを活用した予知保全ソリューション。設備の故障を事前に予測し、ダウンタイムを最小限に抑えます。",
    image: "/src/assets/product/product3.jpeg",
  },
];

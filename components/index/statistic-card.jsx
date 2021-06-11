import { Divider, ProgressComplete, ProgressSection, StaticBlock, StaticCount, StaticDesc, StaticProgress, StaticsSection, StatisticCardHolder } from "../widgets/index/statistic-card.widgets"

const StatisticCard = () => {
    return (
        <StatisticCardHolder className="card">

            <StaticsSection>
                <StaticBlock>
                    <StaticCount>$89,914</StaticCount>
                    <StaticDesc>of $100,000 blocked</StaticDesc>
                </StaticBlock>
                <Divider />
                <StaticBlock>
                    <StaticCount>5,007</StaticCount>
                    <StaticDesc>total backers</StaticDesc>
                </StaticBlock>
                <Divider />
                <StaticBlock>
                    <StaticCount>56</StaticCount>
                    <StaticDesc>days left</StaticDesc>
                </StaticBlock>
                <Divider display="none" />
            </StaticsSection>

            <ProgressSection>
                <StaticProgress>
                    <ProgressComplete />
                </StaticProgress>
            </ProgressSection>
        </StatisticCardHolder>
    )
}

export default StatisticCard

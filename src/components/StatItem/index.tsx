interface StatItemProps {
    stat: {
        name: string;
        value: number;
    };
}
const StatItem = ({ stat }: StatItemProps) => {
    console.log({ stat });

    return <div>StatItem Component</div>;
};

export default StatItem;

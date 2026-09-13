import StatItem from '../StatItem';

interface StatListProps {
    stats: {
        name: string;
        value: number;
    }[];
}

const StatList = ({ stats }: StatListProps) => {
    return (
        <div>
            {stats.map((stat) => (
                <StatItem key={stat.name} stat={stat} />
            ))}
        </div>
    );
};

export default StatList;

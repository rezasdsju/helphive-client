
import {
  FaSearch,
  FaCalendarCheck,
  FaCalendarPlus,
  FaUsers,
  FaHeart,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaSearch />,
    title: 'Discover Opportunities',
    subTitle: 'Explore volunteering opportunities and find ways to help your community.',
  },
  {
    icon: <FaCalendarCheck />,
    title: 'Join Events',
    subTitle: 'Participate in social service events and make a positive impact.',
  },
  {
    icon: <FaCalendarPlus />,
    title: 'Create Events',
    subTitle: 'Organize volunteering events and bring people together for a good cause.',
  },
  {
    icon: <FaUsers />,
    title: 'Build Community',
    subTitle: 'Connect with like-minded people who share your passion for helping others.',
  },
  {
    icon: <FaHeart />,
    title: 'Make an Impact',
    subTitle: 'Contribute your time and skills to create meaningful social change.',
  },
];
const Features = () => {
    return (
        <div className="my-10">
            <div className="text-center py-3 sm:py-5">
                <h2 className="text-3xl sm:text-4xl flex items-center gap-1 font-bold justify-center">
                    <span>Our</span>
                    <span className="text-amber-500">Features</span>
                </h2>
                <p>Everything you need to make impact</p>
            </div>
            <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 px-1 min-[350px]:px-2">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="group rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
                    >
                        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-amber-100 text-2xl text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white dark:bg-amber-500/15 dark:text-amber-400 dark:group-hover:bg-amber-500 dark:group-hover:text-white">
                            {feature.icon}
                        </div>
                        <h3 className="mb-2 text-sm min-[350px]:text-lg font-semibold text-card-foreground">
                            {feature.title}
                        </h3>
                        <p className="text-xs min-[350px]:text-sm leading-relaxed text-muted-foreground">
                            {feature.subTitle}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
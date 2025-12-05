import React from 'react';
import { EXPERIENCE } from '../constants';
import Section from './Section';

const Experience: React.FC = () => {
    return (
        <Section id="experience" className="bg-gray-50 dark:bg-white/5 rounded-3xl my-12 transition-colors duration-300">
            <h2 className="font-display text-4xl md:text-5xl mb-16 text-center text-gray-900 dark:text-white">Work Experience</h2>
            <div className="space-y-12">
                {EXPERIENCE.map((job, index) => (
                    <div key={index} className="group relative pl-8 md:pl-0 border-l border-gray-200 dark:border-white/10 md:border-none">
                        <div className="md:grid md:grid-cols-12 md:gap-8">
                            {/* Timeline Date */}
                            <div className="md:col-span-3 mb-2 md:mb-0 md:text-right">
                                <span className="text-accent font-mono text-sm">{job.period}</span>
                            </div>

                            {/* Content */}
                            <div className="md:col-span-9 relative">
                                {/* Dot for timeline on desktop */}
                                <div className="hidden md:block absolute top-2 -left-[41px] w-4 h-4 rounded-full bg-white dark:bg-dark border-2 border-accent" />

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors">{job.role}</h3>
                                <div className="text-lg text-gray-600 dark:text-secondary mb-4">{job.company}, {job.location}</div>

                                <ul className="space-y-2">
                                    {job.responsibilities.slice(0, 4).map((resp, i) => (
                                        <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-400 text-sm md:text-base">
                                            <span className="text-accent mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 bg-accent" />
                                            {resp}
                                        </li>
                                    ))}
                                    {job.responsibilities.length > 4 && (
                                        <li className="text-xs text-gray-500 dark:text-gray-600 italic mt-2">+ {job.responsibilities.length - 4} more responsibilities</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;

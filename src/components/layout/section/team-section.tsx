import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const members = [
    { src: 'https://avatars.githubusercontent.com/u/47919550?v=4', name: 'Meschac Irung', role: 'Frontend Engineer' },
    { src: 'https://avatars.githubusercontent.com/u/31113941?v=4', name: 'Bernard Ngandu', role: 'Backend Developer' },
    { src: 'https://avatars.githubusercontent.com/u/68236786?v=4', name: 'Theo Balick', role: 'UI/UX Designer' },
    { src: 'https://avatars.githubusercontent.com/u/99137927?v=4', name: 'Glodie Lukose', role: 'Project Manager' },
    { src: 'https://avatars.githubusercontent.com/u/12345678?v=4', name: 'Sarah Johnson', role: 'DevOps Engineer' },
    { src: 'https://avatars.githubusercontent.com/u/23456789?v=4', name: 'Michael Chen', role: 'QA Specialist' },
    { src: 'https://avatars.githubusercontent.com/u/34567890?v=4', name: 'Aisha Patel', role: 'Data Scientist' },
    { src: 'https://avatars.githubusercontent.com/u/45678901?v=4', name: 'Carlos Rodriguez', role: 'Product Manager' },
    { src: 'https://avatars.githubusercontent.com/u/56789012?v=4', name: 'Emma Wilson', role: 'Content Strategist' },
]

export default function TeamSection() {
    return (
        <section>
            <div className="bg-muted/50 py-24">
                <div className="@container mx-auto w-full max-w-5xl px-6">
                    <div className="mb-12">
                        <h2 className="text-foreground text-4xl font-semibold">Meet Our Team</h2>
                        <p className="text-muted-foreground my-4 text-balance text-lg">Our talented professionals bring diverse expertise and passion to every project. Together, we collaborate to deliver exceptional results and innovative solutions for our clients.</p>
                        <Button
                            asChild
                            variant="outline"
                            className="pr-2">
                            <Link href="#">
                                We are hiring
                                <ChevronRight className="opacity-50" />
                            </Link>
                        </Button>
                    </div>

                    <div className="@sm:grid-cols-2 @xl:grid-cols-3 grid gap-6 md:gap-y-10">
                        {members.map((member, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-[auto_1fr] items-center gap-3">
                                

                                <div>
                                    <span className="text-foreground font-medium">{member.name}</span>
                                    <div className="text-muted-foreground text-sm">{member.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
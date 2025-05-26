import { BarChart2Icon, CalendarIcon, ChevronRightIcon } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent } from "../../../components/ui/card";

const blogPosts = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
];

export const BlogSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-28">
      <div className="container mx-auto flex flex-col items-center gap-20">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-2.5 text-center">
            <p className="[font-family:'Montserrat',Helvetica] font-bold text-[#23a6f0] text-sm tracking-[0.20px] leading-6">
              Practice Advice
            </p>
            <h2 className="font-h-2 font-[number:var(--h-2-font-weight)] text-[#252b42] text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
              Featured Posts
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-light-background-color shadow-light-drop-shadow overflow-hidden"
            >
              <div
                className="h-[300px] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${post.image})` }}
              >
                <Badge className="absolute top-5 left-5 bg-danger-color text-light-text-color font-bold shadow-[0px_2px_4px_#0000001a]">
                  NEW
                </Badge>
              </div>

              <CardContent className="flex flex-col items-start gap-2.5 pt-[25px] pb-[35px] px-[25px]">
                <div className="flex items-center gap-[15px]">
                  <span className="text-disabled-element-color font-small font-[number:var(--small-font-weight)] text-[length:var(--small-font-size)] tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] [font-style:var(--small-font-style)]">
                    {post.tags[0]}
                  </span>
                  <span className="text-[#727272] font-small font-[number:var(--small-font-weight)] text-[length:var(--small-font-size)] tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] [font-style:var(--small-font-style)]">
                    {post.tags[1]}
                  </span>
                  <span className="text-[#727272] font-small font-[number:var(--small-font-weight)] text-[length:var(--small-font-size)] tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] [font-style:var(--small-font-style)]">
                    {post.tags[2]}
                  </span>
                </div>

                <h4 className="font-h-4 font-[number:var(--h-4-font-weight)] text-text-color text-[length:var(--h-4-font-size)] tracking-[var(--h-4-letter-spacing)] leading-[var(--h-4-line-height)] [font-style:var(--h-4-font-style)]">
                  {post.title}
                </h4>

                <p className="font-paragraph font-[number:var(--paragraph-font-weight)] text-second-text-color text-[length:var(--paragraph-font-size)] tracking-[var(--paragraph-letter-spacing)] leading-[var(--paragraph-line-height)] [font-style:var(--paragraph-font-style)]">
                  {post.description}
                </p>

                <div className="flex items-center justify-between w-full py-[15px]">
                  <div className="flex items-center gap-[5px]">
                    <CalendarIcon className="w-4 h-4 text-[#727272]" />
                    <span className="text-[#727272] font-small font-[number:var(--small-font-weight)] text-[length:var(--small-font-size)] tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] [font-style:var(--small-font-style)]">
                      {post.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-[5px]">
                    <BarChart2Icon className="w-4 h-4 text-second-text-color" />
                    <span className="text-second-text-color font-small font-[number:var(--small-font-weight)] text-[length:var(--small-font-size)] tracking-[var(--small-letter-spacing)] leading-[var(--small-line-height)] [font-style:var(--small-font-style)]">
                      {post.comments} comments
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="[font-family:'Montserrat',Helvetica] font-bold text-[#727272] text-sm tracking-[0.20px] leading-6">
                    Learn More
                  </span>
                  <ChevronRightIcon className="w-[9px] h-4 text-[#727272]" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

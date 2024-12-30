import BaseLayout from "@/components/layouts/base/Base.layout";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar/Avatar.ui";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card/Card.ui";
import {
  ScrollArea,
  ScrollBar,
} from "@/components/ui/scroll-area/ScrollArea.ui";
import { Separator } from "@/components/ui/separator/Separator.ui";
import Image from "next/image";
import FoodIcon from "@/assets/icons/bowl-food-solid.svg";

const FoodTemplate: React.FC = () => {
  return (
    <BaseLayout>
      <div className="px-4 pt-4 pb-16 flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="w-10 h-10 rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>tomohisa</p>
            </CardTitle>
            <CardDescription>2024/12/26 〜 2025/01/09</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <div className="flex flex-col justify-center items-center">
                <div>
                  <Image
                    src={FoodIcon}
                    alt="food"
                    width={40}
                    height={20}
                    className="p-2"
                  />
                </div>
                <Separator className="w-10" />
                <p className="p-2">昼</p>
                <Separator className="w-10" />
                <p className="p-2">夜</p>
              </div>
              <ScrollArea className="w-auto whitespace-nowrap rounded-md">
                <div className="flex w-max justify-center">
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">26</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">27</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">28</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">29</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">30</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-centerr">31</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">1</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">2</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">3</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">4</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">5</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">6</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">7</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">8</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">9</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="w-10 h-10 rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>jyunpei</p>
            </CardTitle>
            <CardDescription>2024/12/26 〜 2025/01/09</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <div className="flex flex-col justify-center items-center">
                <div>
                  <Image
                    src={FoodIcon}
                    alt="food"
                    width={40}
                    height={20}
                    className="p-2"
                  />
                </div>
                <Separator className="w-10" />
                <p className="p-2">昼</p>
                <Separator className="w-10" />
                <p className="p-2">夜</p>
              </div>
              <ScrollArea className="w-auto whitespace-nowrap rounded-md">
                <div className="flex w-max justify-center">
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">26</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">27</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">28</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">29</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">30</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-centerr">31</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">1</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">2</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">3</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">4</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">5</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">6</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">7</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">8</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="overflow-hidden">
                      <p className="p-2 text-center">9</p>
                      <Separator />
                      <p className="p-2 text-center">⭕️</p>
                      <Separator />
                      <p className="p-2 text-center">❌</p>
                    </div>
                  </div>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </CardContent>
        </Card>
      </div>
    </BaseLayout>
  );
};

export default FoodTemplate;

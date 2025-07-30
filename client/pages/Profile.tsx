import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Star,
  Award,
  Calendar,
  Settings,
  Edit3,
} from "lucide-react";

interface Post {
  id: string;
  category: "Help" | "Work" | "Services" | "Alert";
  description: string;
  timeAgo: string;
  status: "active" | "completed" | "expired";
  responseCount: number;
}

interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  earnedDate: string;
}

const mockPosts: Post[] = [
  {
    id: "1",
    category: "Help",
    description: "Need help moving furniture to my new apartment",
    timeAgo: "2 hours ago",
    status: "active",
    responseCount: 5,
  },
  {
    id: "2",
    category: "Services",
    description: "Professional house cleaning services available",
    timeAgo: "1 day ago",
    status: "completed",
    responseCount: 12,
  },
  {
    id: "3",
    category: "Work",
    description: "Looking for freelance graphic designer",
    timeAgo: "3 days ago",
    status: "expired",
    responseCount: 8,
  },
];

const mockBadges: Badge[] = [
  {
    id: "1",
    name: "Helper",
    icon: "🤝",
    description: "Helped 5+ neighbors",
    earnedDate: "2024-01-15",
  },
  {
    id: "2",
    name: "Reliable",
    icon: "⭐",
    description: "4.8+ star rating",
    earnedDate: "2024-01-20",
  },
  {
    id: "3",
    name: "Active Member",
    icon: "🔥",
    description: "30+ posts created",
    earnedDate: "2024-02-01",
  },
];

const categoryColors = {
  Help: "bg-blue-100 text-blue-800",
  Work: "bg-green-100 text-green-800",
  Services: "bg-purple-100 text-purple-800",
  Alert: "bg-red-100 text-red-800",
};

const statusColors = {
  active: "bg-green-100 text-green-800",
  completed: "bg-blue-100 text-blue-800",
  expired: "bg-gray-100 text-gray-800",
};

export default function Profile() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <Link to="/home" className="p-2">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <h1 className="text-xl font-semibold text-gray-900">Profile</h1>
          <Button variant="ghost" size="icon">
            <Settings className="w-6 h-6 text-gray-600" />
          </Button>
        </div>
      </div>

      {/* Profile Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-6">
        <div className="text-center">
          <div className="relative inline-block mb-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="text-2xl">AS</AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary hover:bg-primary/90"
            >
              <Edit3 className="w-4 h-4" />
            </Button>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Arjun Sharma
          </h2>

          <div className="flex items-center justify-center text-gray-600 mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Koramangala, Bangalore</span>
          </div>

          <p className="text-gray-600 mb-4 max-w-sm mx-auto">
            Software developer who loves helping the community. Always ready to
            lend a hand! 🤝
          </p>

          {/* Stats */}
          <div className="flex justify-center space-x-8 mb-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">4.8</p>
              <div className="flex items-center justify-center">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm text-gray-600 ml-1">Rating</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">32</p>
              <p className="text-sm text-gray-600">Posts</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">15</p>
              <p className="text-sm text-gray-600">Helped</p>
            </div>
          </div>

          {/* Member since */}
          <div className="flex items-center justify-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            <span>Member since January 2024</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 py-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-12 rounded-2xl bg-gray-100">
            <TabsTrigger
              value="posts"
              className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              My Posts
            </TabsTrigger>
            <TabsTrigger
              value="badges"
              className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Badges
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-6 space-y-4">
            {mockPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
              >
                <div className="flex items-start justify-between mb-3">
                  <Badge
                    className={`${categoryColors[post.category]} font-medium`}
                  >
                    {post.category}
                  </Badge>
                  <Badge
                    className={`${statusColors[post.status]} font-medium capitalize`}
                  >
                    {post.status}
                  </Badge>
                </div>

                <p className="text-gray-800 mb-3 leading-relaxed">
                  {post.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.timeAgo}</span>
                  <span>{post.responseCount} responses</span>
                </div>
              </div>
            ))}

            <div className="text-center py-4">
              <Button variant="ghost" className="text-gray-500">
                Load more posts
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="badges" className="mt-6">
            <div className="grid grid-cols-1 gap-4">
              {mockBadges.map((badge) => (
                <div
                  key={badge.id}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center text-2xl">
                      {badge.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {badge.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {badge.description}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Award className="w-3 h-3 mr-1" />
                        <span>
                          Earned on{" "}
                          {new Date(badge.earnedDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Badge progress */}
            <div className="mt-6 p-5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl">
              <h3 className="font-semibold text-gray-900 mb-2">
                Next Badge Progress
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">
                      Super Helper (Help 10+ people)
                    </span>
                    <span className="text-gray-600">7/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Bottom spacing */}
      <div className="h-20"></div>
    </div>
  );
}

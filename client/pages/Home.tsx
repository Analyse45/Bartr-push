import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Plus, MapPin, Clock, ThumbsUp, X, Repeat } from "lucide-react";

interface Post {
  id: string;
  userName: string;
  userAvatar: string;
  location: string;
  category: 'Help' | 'Work' | 'Services' | 'Alert';
  timeAgo: string;
  description: string;
  isAnonymous?: boolean;
}

const mockPosts: Post[] = [
  {
    id: '1',
    userName: 'Priya Sharma',
    userAvatar: '/placeholder.svg',
    location: '0.2 km away',
    category: 'Help',
    timeAgo: '2 minutes ago',
    description: 'Need help moving furniture to my new apartment. Looking for 2-3 people who can help for 2 hours. Will provide snacks and drinks!'
  },
  {
    id: '2',
    userName: 'Anonymous User',
    userAvatar: '/placeholder.svg',
    location: '0.5 km away',
    category: 'Alert',
    timeAgo: '15 minutes ago',
    description: 'Lost golden retriever near Central Park. Goes by the name Max. Please contact if found. Reward offered.',
    isAnonymous: true
  },
  {
    id: '3',
    userName: 'Rohit Kumar',
    userAvatar: '/placeholder.svg',
    location: '0.8 km away',
    category: 'Services',
    timeAgo: '1 hour ago',
    description: 'Professional house cleaning services available. 5 years experience. Reasonable rates. Contact for booking.'
  },
  {
    id: '4',
    userName: 'Meera Patel',
    userAvatar: '/placeholder.svg',
    location: '1.2 km away',
    category: 'Work',
    timeAgo: '3 hours ago',
    description: 'Looking for a freelance graphic designer for social media posts. Budget: ₹5000-8000 per month. Portfolio required.'
  }
];

const categoryColors = {
  Help: 'bg-blue-100 text-blue-800',
  Work: 'bg-green-100 text-green-800',
  Services: 'bg-purple-100 text-purple-800',
  Alert: 'bg-red-100 text-red-800'
};

export default function Home() {
  const [posts, setPosts] = useState(mockPosts);

  const handleInterested = (postId: string) => {
    console.log('Interested in post:', postId);
  };

  const handleIgnore = (postId: string) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const handlePushAgain = (postId: string) => {
    console.log('Push again:', postId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Bartr</h1>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Koramangala, Bangalore</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link to="/notifications">
              <Button variant="ghost" size="icon" className="relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5V3z"/>
                </svg>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></div>
              </Button>
            </Link>
            <Link to="/profile">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </div>

      {/* Create Post Button */}
      <div className="px-6 py-4">
        <Link to="/create-post">
          <Button className="w-full h-12 rounded-2xl bg-primary hover:bg-primary/90 shadow-sm">
            <Plus className="w-5 h-5 mr-2" />
            <span className="font-semibold">What do you need today?</span>
          </Button>
        </Link>
      </div>

      {/* Posts Feed */}
      <div className="px-6 pb-6 space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            {/* Post Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={post.userAvatar} />
                  <AvatarFallback>
                    {post.isAnonymous ? '?' : post.userName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">
                    {post.isAnonymous ? 'Anonymous User' : post.userName}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-2">
                    <span>{post.location}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{post.timeAgo}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Badge className={`${categoryColors[post.category]} font-medium`}>
                {post.category}
              </Badge>
            </div>

            {/* Post Content */}
            <p className="text-gray-800 mb-6 leading-relaxed">
              {post.description}
            </p>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <Button 
                onClick={() => handleInterested(post.id)}
                className="flex-1 h-12 rounded-2xl bg-primary hover:bg-primary/90 font-semibold"
              >
                <ThumbsUp className="w-4 h-4 mr-2" />
                Interested
              </Button>
              <Button 
                onClick={() => handleIgnore(post.id)}
                variant="outline"
                className="h-12 rounded-2xl border-gray-200 hover:bg-gray-50"
              >
                <X className="w-4 h-4" />
              </Button>
              <Button 
                onClick={() => handlePushAgain(post.id)}
                variant="outline"
                className="h-12 rounded-2xl border-gray-200 hover:bg-gray-50"
              >
                <Repeat className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}

        {/* Load More */}
        <div className="text-center py-6">
          <Button variant="ghost" className="text-gray-500">
            Load more posts
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex justify-around">
          <Link to="/home" className="flex flex-col items-center space-y-1">
            <div className="p-2">
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </div>
            <span className="text-xs font-medium text-primary">Home</span>
          </Link>
          <Link to="/create-post" className="flex flex-col items-center space-y-1">
            <div className="p-2">
              <Plus className="w-6 h-6 text-gray-400" />
            </div>
            <span className="text-xs font-medium text-gray-400">Create</span>
          </Link>
          <Link to="/notifications" className="flex flex-col items-center space-y-1">
            <div className="p-2 relative">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5V3z"/>
              </svg>
              <div className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <span className="text-xs font-medium text-gray-400">Alerts</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center space-y-1">
            <div className="p-2">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <span className="text-xs font-medium text-gray-400">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

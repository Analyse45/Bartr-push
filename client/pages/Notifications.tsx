import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, ThumbsUp, Clock, CheckCircle2 } from "lucide-react";

interface Notification {
  id: string;
  type: 'response' | 'interested' | 'system';
  title: string;
  description: string;
  timeAgo: string;
  isRead: boolean;
  userAvatar?: string;
  userName?: string;
  postCategory?: string;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'response',
    title: 'New Response to Your Help Request',
    description: 'Rahul Kumar responded to your furniture moving request',
    timeAgo: '2 minutes ago',
    isRead: false,
    userAvatar: '/placeholder.svg',
    userName: 'Rahul Kumar',
    postCategory: 'Help'
  },
  {
    id: '2',
    type: 'interested',
    title: '3 People Interested',
    description: 'Multiple users showed interest in your graphic design work post',
    timeAgo: '1 hour ago',
    isRead: false,
    postCategory: 'Work'
  },
  {
    id: '3',
    type: 'response',
    title: 'Response to Alert',
    description: 'Someone found information about your lost dog Max',
    timeAgo: '3 hours ago',
    isRead: true,
    userAvatar: '/placeholder.svg',
    userName: 'Priya Sharma',
    postCategory: 'Alert'
  },
  {
    id: '4',
    type: 'system',
    title: 'Post Expired',
    description: 'Your house cleaning services post has expired after 24 hours',
    timeAgo: '1 day ago',
    isRead: true,
    postCategory: 'Services'
  },
  {
    id: '5',
    type: 'interested',
    title: 'High Interest!',
    description: '8 users are interested in your tutoring services',
    timeAgo: '2 days ago',
    isRead: true,
    postCategory: 'Services'
  }
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'response':
      return <MessageCircle className="w-5 h-5 text-blue-600" />;
    case 'interested':
      return <ThumbsUp className="w-5 h-5 text-green-600" />;
    case 'system':
      return <Clock className="w-5 h-5 text-gray-600" />;
    default:
      return <MessageCircle className="w-5 h-5 text-blue-600" />;
  }
};

export default function Notifications() {
  const [notifications, setNotifications] = useState(mockNotifications);

  const markAsRead = (notificationId: string) => {
    setNotifications(notifications.map(notif => 
      notif.id === notificationId ? { ...notif, isRead: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, isRead: true })));
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/home" className="p-2 mr-2">
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </Link>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Notifications</h1>
              {unreadCount > 0 && (
                <p className="text-sm text-gray-600">{unreadCount} unread</p>
              )}
            </div>
          </div>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              onClick={markAllAsRead}
              className="text-primary font-medium"
            >
              Mark all read
            </Button>
          )}
        </div>
      </div>

      {/* Notifications List */}
      <div className="px-6 py-4">
        {notifications.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <MessageCircle className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No notifications yet</h3>
            <p className="text-gray-600">You'll see responses and updates here</p>
          </div>
        ) : (
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div 
                key={notification.id}
                className={`bg-white rounded-2xl p-4 shadow-sm border ${
                  notification.isRead ? 'border-gray-100' : 'border-primary/20 bg-red-50/30'
                }`}
                onClick={() => !notification.isRead && markAsRead(notification.id)}
              >
                <div className="flex items-start space-x-3">
                  {/* Icon/Avatar */}
                  <div className="flex-shrink-0">
                    {notification.userAvatar ? (
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={notification.userAvatar} />
                        <AvatarFallback>
                          {notification.userName?.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        {getNotificationIcon(notification.type)}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-sm">
                          {notification.title}
                        </p>
                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                          {notification.description}
                        </p>
                        
                        {/* Meta info */}
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-xs text-gray-500">
                            {notification.timeAgo}
                          </span>
                          {notification.postCategory && (
                            <>
                              <span className="text-xs text-gray-300">•</span>
                              <Badge variant="secondary" className="text-xs">
                                {notification.postCategory}
                              </Badge>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Read indicator */}
                      <div className="flex-shrink-0 ml-2">
                        {notification.isRead ? (
                          <CheckCircle2 className="w-4 h-4 text-gray-400" />
                        ) : (
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons for responses */}
                {notification.type === 'response' && !notification.isRead && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex space-x-2">
                      <Button size="sm" className="h-8 rounded-lg bg-primary hover:bg-primary/90">
                        View Response
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="h-8 rounded-lg border-gray-200"
                      >
                        Message User
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom spacing for navigation */}
      <div className="h-20"></div>
    </div>
  );
}

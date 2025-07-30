import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, MapPin } from "lucide-react";

export default function CreatePost() {
  const navigate = useNavigate();
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  const categories = [
    { value: "help", label: "Help", color: "bg-blue-100 text-blue-800" },
    { value: "work", label: "Work", color: "bg-green-100 text-green-800" },
    {
      value: "services",
      label: "Services",
      color: "bg-purple-100 text-purple-800",
    },
    { value: "alert", label: "Alert", color: "bg-red-100 text-red-800" },
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!category || !description.trim()) {
      return;
    }

    // Navigate to confirmation screen
    navigate("/push-confirmation");
  };

  const isFormValid = category && description.trim().length > 10;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <Link to="/home" className="p-2">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <h1 className="text-xl font-semibold text-gray-900">Create Post</h1>
        <div className="w-10" />
      </div>

      {/* Location */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span>Posting to Koramangala, Bangalore</span>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 px-6 py-6 space-y-6">
        {/* Category Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-gray-700">
            Category *
          </Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="h-14 rounded-2xl border-gray-200">
              <SelectValue placeholder="What do you need help with?" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  <div className="flex items-center space-x-3">
                    <div
                      className={`px-2 py-1 rounded-lg ${cat.color} text-xs font-medium`}
                    >
                      {cat.label}
                    </div>
                    <span>{cat.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Description */}
        <div className="space-y-3">
          <Label
            htmlFor="description"
            className="text-sm font-medium text-gray-700"
          >
            Description *
          </Label>
          <Textarea
            id="description"
            placeholder="Describe what you need in detail..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-32 rounded-2xl border-gray-200 text-base resize-none"
            maxLength={500}
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>Be specific and clear about your request</span>
            <span>{description.length}/500</span>
          </div>
        </div>

        {/* Image Upload */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-gray-700">
            Add Photo (Optional)
          </Label>
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="flex items-center justify-center h-32 border-2 border-dashed border-gray-200 rounded-2xl cursor-pointer hover:border-gray-300 transition-colors"
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <div className="text-center">
                  <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-500">
                    Tap to add photo
                  </span>
                </div>
              )}
            </label>
          </div>
        </div>

        {/* Anonymous Toggle */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
          <div>
            <p className="font-medium text-gray-900">Post anonymously</p>
            <p className="text-sm text-gray-500">
              Hide your identity from others
            </p>
          </div>
          <Switch checked={isAnonymous} onCheckedChange={setIsAnonymous} />
        </div>

        {/* Push Range Info */}
        <div className="p-4 bg-blue-50 rounded-2xl">
          <p className="text-sm font-medium text-blue-900 mb-1">
            📍 Push Range: 2 km radius
          </p>
          <p className="text-sm text-blue-700">
            Your post will reach approximately 50-100 nearby users
          </p>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="px-6 py-4 border-t border-gray-200">
        <Button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className="w-full h-14 text-lg font-semibold rounded-2xl bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Push to Nearby Users
        </Button>
        <p className="text-center text-sm text-gray-500 mt-3">
          Your post will be live for 24 hours
        </p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

type Comment = {
  id: string;
  author: string;
  text: string;
  timestamp: string;
};

type ReactionsAndCommentsProps = {
  storyId: string;
};

export default function ReactionsAndComments({ storyId }: ReactionsAndCommentsProps) {
  const [likes, setLikes] = useState(() => {
    const stored = localStorage.getItem(`story_${storyId}_likes`);
    return stored ? parseInt(stored) : 42;
  });
  
  const [dislikes, setDislikes] = useState(() => {
    const stored = localStorage.getItem(`story_${storyId}_dislikes`);
    return stored ? parseInt(stored) : 8;
  });

  const [userReaction, setUserReaction] = useState<'like' | 'dislike' | null>(() => {
    return localStorage.getItem(`story_${storyId}_reaction`) as 'like' | 'dislike' | null;
  });

  const [comments, setComments] = useState<Comment[]>(() => {
    const stored = localStorage.getItem(`story_${storyId}_comments`);
    return stored ? JSON.parse(stored) : [];
  });

  const [newComment, setNewComment] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");

  const total = likes + dislikes;
  const likePercentage = total > 0 ? Math.round((likes / total) * 100) : 0;
  const dislikePercentage = total > 0 ? Math.round((dislikes / total) * 100) : 0;

  const handleLike = () => {
    if (userReaction === 'like') {
      // Remove like
      setLikes(likes - 1);
      setUserReaction(null);
      localStorage.setItem(`story_${storyId}_likes`, String(likes - 1));
      localStorage.removeItem(`story_${storyId}_reaction`);
    } else if (userReaction === 'dislike') {
      // Switch from dislike to like
      setDislikes(dislikes - 1);
      setLikes(likes + 1);
      setUserReaction('like');
      localStorage.setItem(`story_${storyId}_dislikes`, String(dislikes - 1));
      localStorage.setItem(`story_${storyId}_likes`, String(likes + 1));
      localStorage.setItem(`story_${storyId}_reaction`, 'like');
    } else {
      // Add like
      setLikes(likes + 1);
      setUserReaction('like');
      localStorage.setItem(`story_${storyId}_likes`, String(likes + 1));
      localStorage.setItem(`story_${storyId}_reaction`, 'like');
    }
  };

  const handleDislike = () => {
    if (userReaction === 'dislike') {
      // Remove dislike
      setDislikes(dislikes - 1);
      setUserReaction(null);
      localStorage.setItem(`story_${storyId}_dislikes`, String(dislikes - 1));
      localStorage.removeItem(`story_${storyId}_reaction`);
    } else if (userReaction === 'like') {
      // Switch from like to dislike
      setLikes(likes - 1);
      setDislikes(dislikes + 1);
      setUserReaction('dislike');
      localStorage.setItem(`story_${storyId}_likes`, String(likes - 1));
      localStorage.setItem(`story_${storyId}_dislikes`, String(dislikes + 1));
      localStorage.setItem(`story_${storyId}_reaction`, 'dislike');
    } else {
      // Add dislike
      setDislikes(dislikes + 1);
      setUserReaction('dislike');
      localStorage.setItem(`story_${storyId}_dislikes`, String(dislikes + 1));
      localStorage.setItem(`story_${storyId}_reaction`, 'dislike');
    }
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !commentAuthor.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: commentAuthor,
      text: newComment,
      timestamp: new Date().toLocaleDateString(),
    };

    const updatedComments = [comment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(`story_${storyId}_comments`, JSON.stringify(updatedComments));
    
    setNewComment("");
  };

  return (
    <div className="mt-12 space-y-8">
      {/* Like/Dislike Section */}
      <div className="border-t border-zinc-800 pt-8">
        <h2 className="font-gothic text-2xl text-red-600 mb-4">What did you think?</h2>
        
        <div className="flex gap-3 mb-4">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
              userReaction === 'like'
                ? 'border-green-600 bg-green-900/20 text-green-400'
                : 'border-zinc-700 text-gray-300 hover:border-green-600'
            }`}
          >
            <span>👍</span>
            <span>{likes}</span>
          </button>
          
          <button
            onClick={handleDislike}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
              userReaction === 'dislike'
                ? 'border-red-700 bg-red-900/20 text-red-400'
                : 'border-zinc-700 text-gray-300 hover:border-red-700'
            }`}
          >
            <span>👎</span>
            <span>{dislikes}</span>
          </button>
        </div>

        {/* Like/Dislike Ratio */}
        {total > 0 && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Likes: {likePercentage}%</span>
              <span>Dislikes: {dislikePercentage}%</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
              <div className="h-full flex">
                <div 
                  className="bg-green-600 transition-all duration-300" 
                  style={{ width: `${likePercentage}%` }}
                />
                <div 
                  className="bg-red-600 transition-all duration-300" 
                  style={{ width: `${dislikePercentage}%` }}
                />
              </div>
            </div>
            <p className="text-xs text-gray-500">{total} total reactions</p>
          </div>
        )}
      </div>

      {/* Comments Section */}
      <div className="border-t border-zinc-800 pt-8">
        <h2 className="font-gothic text-2xl text-red-600 mb-4">Comments</h2>

        {/* Comment Form */}
        <form onSubmit={handleSubmitComment} className="mb-6 space-y-3">
          <input
            type="text"
            value={commentAuthor}
            onChange={(e) => setCommentAuthor(e.target.value)}
            placeholder="Your name"
            className="w-full bg-zinc-950/40 border border-zinc-800 rounded-lg px-3 py-2 text-gray-200 placeholder-gray-500 focus:border-red-700 outline-none"
            required
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts..."
            rows={3}
            className="w-full bg-zinc-950/40 border border-zinc-800 rounded-lg px-3 py-2 text-gray-200 placeholder-gray-500 focus:border-red-700 outline-none resize-none"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-red-700 text-white hover:bg-red-600 transition-colors"
          >
            Post Comment
          </button>
        </form>

        {/* Comments List */}
        <div className="space-y-4">
          {comments.length === 0 ? (
            <p className="text-gray-500 text-sm italic">No comments yet. Be the first to share your thoughts!</p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-300">{comment.author}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{comment.timestamp}</span>
                    </div>
                    <p className="text-gray-400 text-sm whitespace-pre-wrap">{comment.text}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}


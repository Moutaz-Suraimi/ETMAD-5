import React from 'react';
import { Wrench, Settings } from 'lucide-react';

export const Maintenance = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-6 text-center relative overflow-hidden" dir="rtl">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="glass p-10 md:p-14 rounded-3xl max-w-2xl w-full shadow-glow relative z-10 border border-primary/20 backdrop-blur-xl">
        <div className="flex justify-center mb-8 relative">
           <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-slow"></div>
           <Settings className="w-20 h-20 md:w-24 md:h-24 text-primary animate-orbit" />
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-brand">
          تم تفعيل وضع الصيانة
        </h1>
        
        <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-10">
          الموقع حالياً تحت الصيانة وسيعود قريباً.
          <br className="hidden md:block" />
          نعمل على تحسين تجربتكم، شكراً لتفهمكم.
        </p>

        <div className="flex justify-center items-center">
          <div className="flex space-x-2 space-x-reverse">
            <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary animate-bounce"></span>
            <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-teal animate-bounce" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald animate-bounce" style={{ animationDelay: '0.4s' }}></span>
          </div>
        </div>
      </div>
      
      {/* Footer text */}
      <div className="absolute bottom-8 text-muted-foreground/60 text-sm">
        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة
      </div>
    </div>
  );
};

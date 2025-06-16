import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

export default function BannerLayout() {
  return (
    <section className="w-full px-4  bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Banner */}
          <div className="flex-1 lg:flex-[2]">
            <div className="h-[280px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600">
              <LeftBanner />
            </div>
          </div>

          {/* Side Banner */}
          <div className="hidden lg:block lg:flex-1">
            <div className="h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-gray-600 to-gray-800">
              <RightBanner />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

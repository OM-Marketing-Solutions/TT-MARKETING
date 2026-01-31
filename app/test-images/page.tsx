export default function TestImages() {
    return (
        <div className="min-h-screen bg-gray-900 p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold text-white">Image Test Page</h1>

                {/* Logo Test */}
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold text-emerald-400 mb-4">Logo Test</h2>
                    <div className="bg-white p-4 rounded inline-block">
                        <img
                            src="/images/ttmarketing_logo.png"
                            alt="TT Marketing Logo"
                            className="h-8 md:h-10 w-auto max-h-10 max-w-[120px] object-contain"
                        />
                    </div>
                    <p className="text-gray-300 mt-2">Path: /images/ttmarketing_logo.png</p>
                </div>

                {/* Mansuri Image Test */}
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold text-emerald-400 mb-4">Mansuri Image Test</h2>
                    <div className="w-64 h-64">
                        <img
                            src="/images/mansuri.jpeg"
                            alt="TT Marketing - Owner"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <p className="text-gray-300 mt-2">Path: /images/mansuri.jpeg</p>
                </div>

                {/* Raw Image Tests */}
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold text-emerald-400 mb-4">Raw Image Tags</h2>
                    <p className="text-white mb-4">Logo:</p>
                    <img src="/images/ttmarketing_logo.png" alt="Logo Raw" style={{ maxWidth: '200px' }} />

                    <p className="text-white mt-6 mb-4">Mansuri:</p>
                    <img src="/images/mansuri.jpeg" alt="Mansuri Raw" style={{ maxWidth: '200px' }} />
                </div>
            </div>
        </div>
    );
}

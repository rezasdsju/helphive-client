import { Input } from "@/components/ui/input";
import { LuMail, LuSend } from "react-icons/lu";

const Newsletter = () => {
    return (
        <section className="relative z-10 -mb-10 px-4">
            <div className="mx-auto max-w-4xl rounded-3xl border border-amber-300/60 bg-linear-to-br from-amber-50 to-amber-200 dark:from-blue-50 dark:to-blue-300 px-5 py-10 text-center text-amber-950 shadow-lg sm:px-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-1.5 text-xs font-semibold tracking-wide">
                    <LuMail size={14} />
                    STAY CONNECTED
                </span>

                <h2 className="mx-auto mt-4 max-w-xl text-2xl font-bold sm:text-3xl">
                    Join the Hive &amp; Never Miss a Good Deed
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm text-amber-900/80 sm:text-base">
                    Connecting volunteers to meaningful social impact events
                </p>

                <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
                    <Input
                        type="email"
                        placeholder="Enter your email here"
                        aria-label="Email address"
                        className="h-11 flex-1 border-amber-400/60 bg-white text-amber-950 placeholder:text-amber-900/50"
                    />
                    <button
                        type="button"
                        className="inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-md bg-amber-950 px-6 text-sm font-semibold text-white transition hover:bg-amber-900 active:scale-95"
                    >
                        <LuSend size={16} />
                        Subscribe
                    </button>
                </div>

                <p className="mt-3 text-xs text-amber-900/70">
                    No spam. Unsubscribe anytime.
                </p>
            </div>
        </section>
    );
};

export default Newsletter;
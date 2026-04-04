import { useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { Github, Code, GitCommit, ExternalLink, Activity } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface GithubProfile {
  avatar_url: string;
  login: string;
  name: string;
  html_url: string;
  public_repos: number;
}

interface LanguageStat {
  name: string;
  percentage: number;
  color: string;
}

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  Shell: '#89e051',
  Jupyter: '#DA5B0B'
};

const DEFAULT_COLOR = '#8b949e';

const GithubHighlights = () => {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [languages, setLanguages] = useState<LanguageStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [showBars, setShowBars] = useState(false);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const username = 'vishnuvardhan-0862';

        // Fetch profile stats
        const profileRes = await fetch(`https://api.github.com/users/${username}`);
        if (!profileRes.ok) throw new Error('Failed to fetch profile');
        const profileData = await profileRes.json();
        setProfile(profileData);

        // Fetch repositories to aggregate top languages (limiting to 100 for accurate sample)
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
        if (!reposRes.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposRes.json();

        // Calculate language distribution roughly by counting primary language instances
        const langCounts: Record<string, number> = {};
        let totalValids = 0;

        reposData.forEach((repo: any) => {
          if (repo.language && !repo.fork) {
            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
            totalValids++;
          }
        });

        const langStats: LanguageStat[] = Object.entries(langCounts)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalValids) * 100),
            color: LANGUAGE_COLORS[name] || DEFAULT_COLOR
          }))
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 5); // Take top 5

        setLanguages(langStats);

        // Start bar animation after loading finishes
        setTimeout(() => {
          setShowBars(true);
        }, 100);

      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section id="github" className="py-12 lg:py-20 relative z-10">
      <div className="container mx-auto px-6">

        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-2">Live Activity</p>
            <h2 className="section-heading">GitHub <span className="gradient-text">Highlights</span></h2>
            <p className="section-subheading mx-auto">
              Real-time synchronization with my open-source contributions and codebase stack.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">

          {/* Left Card: Profile Info */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-[2rem] p-8 md:p-10 shadow-xl shadow-black/5 border border-white/20 h-full flex flex-col justify-between group hover:shadow-2xl transition-all duration-300">

              {loading ? (
                <div className="space-y-8 animate-pulse">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-800" />
                    <div className="space-y-4 flex-1">
                      <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-1/2" />
                      <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/3" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-20 bg-slate-200 dark:bg-slate-800 rounded-xl w-full" />
                    <div className="h-14 bg-slate-200 dark:bg-slate-800 rounded-xl w-full" />
                  </div>
                </div>
              ) : (
                profile && (
                  <>
                    <div className="space-y-8">
                      {/* Avatar Header */}
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                        <img
                          src={profile.avatar_url}
                          alt="GitHub Avatar"
                          className="w-24 h-24 rounded-full border-4 border-blue-100 dark:border-blue-900/40 shadow-lg object-cover"
                        />
                        <div className="pt-2">
                          <h3 className="text-2xl font-bold text-foreground">
                            {profile.name || "Vishnuvardhan Komakula"}
                          </h3>
                          <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-600 dark:text-blue-400 mt-1 font-medium">
                            <Github className="w-4 h-4" />
                            <span>@{profile.login}</span>
                          </div>
                          <div className="flex items-center justify-center sm:justify-start gap-2 mt-3 text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full w-max mx-auto sm:mx-0">
                            <Activity className="w-4 h-4" />
                            Active Developer
                          </div>
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <GitCommit className="w-4 h-4" />
                            <span className="text-sm font-medium">Repositories</span>
                          </div>
                          <p className="text-3xl font-bold text-foreground">
                            {profile.public_repos}
                          </p>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800">
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <Code className="w-4 h-4" />
                            <span className="text-sm font-medium">Languages</span>
                          </div>
                          <p className="text-3xl font-bold text-foreground">
                            {languages.length}+
                          </p>
                        </div>
                      </div>
                    </div>

                    <a
                      href={profile.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 w-full h-14 rounded-xl font-medium text-base glow-button bg-foreground hover:bg-foreground/90 text-background transition-all shadow-lg shadow-black/10 flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                    >
                      <Github className="w-5 h-5" />
                      View GitHub Profile
                      <ExternalLink className="w-4 h-4 opacity-70 ml-1" />
                    </a>
                  </>
                )
              )}
            </div>
          </ScrollReveal>

          {/* Right Card: Languages & Activity */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-[2rem] p-8 md:p-10 shadow-xl shadow-black/5 border border-white/20 h-full flex flex-col justify-between hover:shadow-2xl transition-all duration-300">

              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                    <Code className="w-6 h-6 text-blue-600" />
                    Most Used Languages
                  </h3>
                </div>

                {loading ? (
                  <div className="space-y-6 animate-pulse">
                    <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded-full w-full mb-8 shadow-sm" />
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between">
                          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-24" />
                          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-12" />
                        </div>
                        <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded-full w-full" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Combined 100% Bar */}
                    <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex mb-8 shadow-sm">
                      {languages.map((lang, index) => (
                        <div
                          key={lang.name}
                          className="h-full transition-all duration-1000 ease-out"
                          style={{
                            backgroundColor: lang.color,
                            width: showBars ? `${lang.percentage}%` : '0%',
                            transitionDelay: `${index * 100}ms`
                          }}
                          title={`${lang.name} - ${lang.percentage}%`}
                        />
                      ))}
                    </div>

                    {languages.map((lang, index) => (
                      <div key={lang.name} className="space-y-2 group">
                        <div className="flex justify-between items-center text-sm font-medium">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-3 h-3 rounded-full shadow-sm"
                              style={{ backgroundColor: lang.color }}
                            />
                            <span className="text-foreground">{lang.name}</span>
                          </div>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {lang.percentage}%
                          </span>
                        </div>
                        <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                              backgroundColor: lang.color,
                              width: showBars ? `${lang.percentage}%` : '0%',
                              transitionDelay: `${index * 100}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {!loading && (
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-center">
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                    <GitCommit className="w-3.5 h-3.5" />
                    📊 Contribution graph tracking on GitHub profile
                  </p>
                </div>
              )}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default GithubHighlights;

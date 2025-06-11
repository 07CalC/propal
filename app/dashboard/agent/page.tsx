'use client';

import { useEffect, useState } from 'react';

type STTConfig = {
  name: string;
  value: string;
  models: {
    name: string;
    value: string;
    languages: {
      name: string;
      value: string;
    }[];
  }[];
}[];

export default function AgentPage() {
  const [config, setConfig] = useState<STTConfig>([]);
  const [providerIndex, setProviderIndex] = useState(() => {
    if (typeof window !== 'undefined') {
      return Number(localStorage.getItem('agentProvider')) || 0;
    }
    return 0;
  });
  const [modelIndex, setModelIndex] = useState(() => {
    if (typeof window !== 'undefined') {
      return Number(localStorage.getItem('agentModel')) || 0;
    }
    return 0;
  });
  const [languageIndex, setLanguageIndex] = useState(() => {
    if (typeof window !== 'undefined') {
      return Number(localStorage.getItem('agentLanguage')) || 0;
    }
    return 0;
  });

  useEffect(() => {
    fetch('/stt.json')
      .then(res => res.json())
      .then(data => {
        const list = data.stt || [];
        setConfig(list);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('agentProvider', providerIndex.toString());
    setModelIndex(0);
    setLanguageIndex(0);
  }, [providerIndex]);

  useEffect(() => {
    localStorage.setItem('agentModel', modelIndex.toString());
    setLanguageIndex(0);
  }, [modelIndex]);

  useEffect(() => {
    localStorage.setItem('agentLanguage', languageIndex.toString());
  }, [languageIndex]);

  const currentProvider = config[providerIndex];
  const currentModel = currentProvider?.models[modelIndex];
  const currentLanguage = currentModel?.languages[languageIndex];

  useEffect(() => {
    if (currentProvider && currentModel && currentLanguage) {
      const configuration = {
        provider: {
          name: currentProvider.name,
          value: currentProvider.value
        },
        model: {
          name: currentModel.name,
          value: currentModel.value
        },
        language: {
          name: currentLanguage.name,
          value: currentLanguage.value
        }
      };
      localStorage.setItem('agentConfiguration', JSON.stringify(configuration));
    }
  }, [currentProvider, currentModel, currentLanguage]);

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">Agent Configuration</h1>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-6">
        <div className="grid gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Provider
            </label>
            <select
              value={providerIndex}
              onChange={(e) => setProviderIndex(Number(e.target.value))}
              className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-cyan-400 transition-all"
            >
              {config.map((prov, index) => (
                <option key={prov.value} value={index}>
                  {prov.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Model
            </label>
            <select
              value={modelIndex}
              onChange={(e) => setModelIndex(Number(e.target.value))}
              className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-cyan-400 transition-all"
            >
              {currentProvider?.models.map((mod, index) => (
                <option key={mod.value} value={index}>
                  {mod.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Language
            </label>
            <select
              value={languageIndex}
              onChange={(e) => setLanguageIndex(Number(e.target.value))}
              className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-cyan-400 transition-all"
            >
              {currentModel?.languages.map((lang, index) => (
                <option key={lang.value} value={index}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
          <h2 className="text-lg font-semibold mb-4 text-cyan-600 dark:text-cyan-400">Configuration Summary</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Provider</span>
              <span className="text-sm text-gray-800 dark:text-gray-100">
                {currentProvider?.name} <code className="text-xs bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">{currentProvider?.value}</code>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Model</span>
              <span className="text-sm text-gray-800 dark:text-gray-100">
                {currentModel?.name} <code className="text-xs bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">{currentModel?.value}</code>
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Language</span>
              <span className="text-sm text-gray-800 dark:text-gray-100">
                {currentLanguage?.name} <code className="text-xs bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">{currentLanguage?.value}</code>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

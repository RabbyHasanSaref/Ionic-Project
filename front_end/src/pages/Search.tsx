import React, { useState } from 'react';
import {
  IonContent,
  IonSearchbar,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonText,
  IonIcon,
  IonChip,
} from '@ionic/react';
import { searchOutline } from 'ionicons/icons';

const sampleData = [
  {
    id: 1,
    title: 'Dhaka Travel Guide',
    subtitle: 'Explore the capital of Bangladesh',
    image: 'https://bn.wikipedia.org/wiki/%E0%A6%A2%E0%A6%BE%E0%A6%95%E0%A6%BE#/media/%E0%A6%9A%E0%A6%BF%E0%A6%A4%E0%A7%8D%E0%A6%B0:Bangladesh_Bank_(33398162476).jpg',
    tags: ['Travel', 'Dhaka'],
  },
  {
    id: 2,
    title: 'Best Restaurants in Chittagong',
    subtitle: 'Where to eat in 2025',
    image: 'https://en.wikipedia.org/wiki/Chittagong#/media/File:Chittagong_War_Cemetery_8.jpg',
    tags: ['Food', 'Chittagong'],
  },
  {
    id: 3,
    title: 'Sundarbans Wildlife',
    subtitle: 'A deep dive into nature',
    image: 'https://en.wikipedia.org/wiki/Wildlife#/media/File:Wildlife_at_Maasai_Mara_(Lion).jpg',
    tags: ['Nature', 'Wildlife'],
  },
];

const popularTopics = ['Dhaka', 'Chittagong', 'Food', 'Wildlife', 'Travel'];

const Search: React.FC = () => {
  const [query, setQuery] = useState('');

  const filteredResults = sampleData.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );

  const handleTopicClick = (topic: string) => {
    setQuery(topic);
  };

  return (
      <IonContent>
        <h2 style={{ fontWeight: 600, fontSize: '1.5rem', marginBottom: '1rem' }}>
          Search
        </h2>

        <IonSearchbar
          value={query}
          onIonInput={(e) => setQuery(e.detail.value!)}
          placeholder="Search articles, topics..."
          animated
          debounce={200}
        />

        <div style={{ marginTop: 12, marginBottom: 12 }}>
          <IonText color="medium"><small>Popular Topics:</small></IonText>
          <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {popularTopics.map((topic, index) => (
              <IonChip
                key={index}
                onClick={() => handleTopicClick(topic)}
                color={query === topic ? 'primary' : 'medium'}
                style={{ cursor: 'pointer' }}
              >
                {topic}
              </IonChip>
            ))}
          </div>
        </div>

        {query === '' ? (
          <div style={{ textAlign: 'center', marginTop: '4rem', color: '#999' }}>
            <IonIcon icon={searchOutline} style={{ fontSize: '3rem' }} />
            <p style={{ fontSize: '1rem', marginTop: 8 }}>Start typing to search</p>
          </div>
        ) : filteredResults.length === 0 ? (
          <div style={{ textAlign: 'center', marginTop: '4rem', color: '#999' }}>
            <p>No results found for "<strong>{query}</strong>"</p>
          </div>
        ) : (
          <IonList>
            {filteredResults.map((result) => (
              <IonItem key={result.id} button>
                <IonAvatar slot="start">
                  <img src={result.image} alt={result.title} />
                </IonAvatar>
                <IonLabel>
                  <h3 style={{ fontWeight: 'bold', marginBottom: 4 }}>{result.title}</h3>
                  <IonText color="medium">
                    <p>{result.subtitle}</p>
                  </IonText>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
  );
};

export default Search;
